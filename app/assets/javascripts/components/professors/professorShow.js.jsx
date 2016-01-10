(function(root) {
  'use strict';

  root.ProfessorShow = React.createClass({
    getStateFromStore: function() {
      var prof = ProfessorStore.find(parseInt(this.props.params.professorId));
      return { prof: prof, reviews: prof.reviews, message: MessageStore.all() };
    },

    getInitialState: function() {
      return {prof: {}, reviews: [], messages: ""};
    },

    _onChange: function() {
      this.setState(this.getStateFromStore());
    },

    // componentWillReceiveProps: function(newProps) {
    //   var prof = ProfessorStore.find(parseInt(newProps.params.professorId));
    //   debugger;
    //   this.setState({
    //     prof: prof, reviews: prof.reviews, message: MessageStore.all()
    //   });
    // },

    componentDidMount: function() {
      ProfessorStore.addProfessorChangeListener(this._onChange);
      MessageStore.addMessageChangeListener(this._onChange);
      ApiUtil.fetchSingleProfessor(parseInt(this.props.params.professorId));
    },

    componentWillUnmount: function() {
      ProfessorStore.removeProfessorChangeListener(this._onChange);
      ApiUtil.clearMessage();
    },

    getHouseBanner: function() {
      if(this.state.prof.house) {
        return this.state.prof.house.name.toLowerCase();
      }
    },

    createReview: function() {
      if (window.CURRENT_USER) {
        this.props.history.pushState(null, "/professors/" + this.state.prof.id + "/new");
      } else {
        window.location.href = "/session/new";
      }
    },

    render: function() {
      if (this.state.prof.reviews === undefined) { return <div></div>; }
      var averages = this.state.prof.averages;
      return (
        <div id="professor-show">

          <div id="professor-bio" className={"animated slideInDown " + this.getHouseBanner()}>

            <img className="professor-pic" src={this.state.prof.image_url} onClick={this.createReview} professor={this.state.prof}></img>

                  <div className="success">
                    <p className="animated bounce">{this.state.message}</p>
                  </div>

            <div className="professor-info">

              <h2>{this.state.prof.name}</h2>

              <ul id="averages">
                  {
                    Object.keys(averages).map(function(attr) {
                      return <li>Average {attr}: {averages[attr]}</li>;
                    })
                  }
                  <br />
                  <li>Total Reviews: {this.state.reviews.length}</li>
                  <br/>
              </ul>

              {
                window.CURRENT_USER_ID && this.state.prof.image_url === null ? <CLWProf professor={this.state.prof}/> : <div></div>
              }
            </div>

            <div className="professor-description">

              <ul>
                <li className="description">
                  {this.state.prof.description}
                </li>
                <li className="animated swing rate-this">
                  Rate {this.state.prof.name} by casting lumos on their face.
                </li>
              </ul>

            </div>

          </div>

          <ul id={averages.ability === 0 ? 'blank' : 'review-list'} className="animated fadeInUp">
            {
              this.state.reviews.map(function(review) {
                return(
                  <li className="review-detail-master">
                    <ReviewDetail key={review.id} review={review}/>
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    }
  });

}(this));
