(function(root) {
  'use strict';

  root.ReviewForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    defaultAttributes: {
      anonymous: false,
      body: "",
      ability: 1,
      easiness: 1,
      helpfulness: 1
    },

    getInitialState: function() {
      return this.defaultAttributes;
    },

    createReview: function(e) {
      e.preventDefault();
      var review = {};
      review.professor_id = parseInt(this.props.params.professorId);
      Object.keys(this.state).forEach(function(key) {
        if(key === 'anonymous') {
          review[key] = JSON.parse(this.state[key]);
        } else if(key !== 'body') {
          review[key] = parseInt(this.state[key]);
        } else {
          review[key] = this.state[key];
        }
      }.bind(this));
        ApiUtil.createReview(review, function() {
          this.props.history.pushState(null, '/professors/' + this.props.params.professorId, {});
        }.bind(this));
        this.setState(this.defaultAttributes);
    },

    _onChange: function() {
      this.setState({prof: ProfessorStore.find(parseInt(this.props.params.professorId))});
    },

    componentDidMount: function() {
      ProfessorStore.addProfessorChangeListener(this._onChange);
      ApiUtil.fetchSingleProfessor(parseInt(this.props.params.professorId));
    },

    componentWillReceiveProps: function(newProps) {
      this.setState({prof: ProfessorStore.find(parseInt(this.props.params.professorId))});
      ApiUtil.fetchSingleProfessor(parseInt(this.props.params.professorId));
    },

    render: function() {
      if (this.state.prof === undefined) { return <div></div>; }
      return(
        <div className="review-new">
          <div className="review-form">
            <h3>Create a Review for {this.state.prof.name}</h3>

            <br/>

            <form onSubmit={this.createReview}>

              <div>
                <label htmlFor="review-anonymous">
                  Anonymous Review?
                  <br/>
                  <select id="anonymous" name="anonymous" valueLink={this.linkState('anonymous')}>
                    <option value='true'>I want to be hidden...</option>
                    <option value="false">I don't care who sees!</option>
                  </select>
                </label>
              </div>

              <br/>

              <ul className="ratings">
              <li>
                <label htmlFor="review-ability">
                  Ability Rating:
                  <select id="ability" name="ability" valueLink={this.linkState('ability')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
              </li>

              <br/>

              <li>
                <label htmlFor="review-easiness">
                  Easiness Rating:
                  <select id="easiness" name="easiness" valueLink={this.linkState('easiness')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
              </li>

              <br/>
              <li>
                <label htmlFor="review-helpfulness">
                  Helpfulness Rating:
                  <select id="helpfulness" name="helpfulness" valueLink={this.linkState('helpfulness')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
              </li>
              </ul>

              <br/>
              <div>
                <label id="review-body" htmlFor="review-body">
                  <textarea id="review-body" placeholder="Write your review here..." valueLink={this.linkState('body')}></textarea>
                </label>
              </div>

              <br/>
              <br/>

              <button>I'm Finished!</button>

            </form>
          </div>
        </div>
      );
    }
  });

}(this));
