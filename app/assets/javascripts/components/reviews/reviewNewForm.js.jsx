(function(root) {
  'use strict';

  root.ReviewForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    defaultAttributes: {
      anonymous: null,
      body: "",
      ability: null,
      easiness: null,
      helpfulness: null,
      errors : []
    },

    getInitialState: function() {
      return this.defaultAttributes;
    },

    createReview: function(e) {
      e.preventDefault();
      ApiUtil.clearErrors();
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
      ApiUtil.createReview(review);
    },

    _onChange: function() {
      this.prof = ProfessorStore.find(parseInt(this.props.params.professorId));
      if (ErrorStore.all().length !== 0) {
        this.setState({ errors: ErrorStore.all() });
      } else {
        this.setState(this.defaultAttributes);
      }
    },

    componentDidMount: function() {
      ErrorStore.addErrorChangeListener(this._onChange);
      ProfessorStore.addProfessorChangeListener(this._onChange);
      ApiUtil.fetchSingleProfessor(parseInt(this.props.params.professorId));
    },

    componentwillUnmount: function() {
      ErrorStore.removeErrorChangeListener(this._onChange);
      ProfessorStore.removeProfessorChangeListener(this._onChange);
    },

    render: function() {
      if (this.prof === undefined) {return <div></div>;}
      return(
        <div className="review-new" onClick={this.clearErrors}>
          <ul id="errors">
            {
              this.state.errors.map(function(error) {
                return <li>{error}</li>;
              })
            }
          </ul>
          <div className="review-form">
            <h3>Create a Review for {this.prof.name}</h3>

            <br/>

            <form onSubmit={this.createReview}>

              <div>
                <label htmlFor="review-anonymous">
                  Anonymous Review?
                  <br/>
                  <select id="anonymous" name="anonymous" valueLink={this.linkState('anonymous')}>
                    <option selected disabled hidden value=''></option>
                    <option value="false">I don't care who sees!</option>
                    <option value='true'>Put on Invisibility Cloak.</option>
                  </select>
                </label>
              </div>

              <br/>

              <ul className="ratings">
              <li>
                <label htmlFor="review-ability">
                  Ability Rating:
                  <select id="ability" name="ability" valueLink={this.linkState('ability')}>
                    <option selected disabled hidden value=''></option>
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
                    <option selected disabled hidden value=''></option>
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
                    <option selected disabled hidden value=''></option>
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
