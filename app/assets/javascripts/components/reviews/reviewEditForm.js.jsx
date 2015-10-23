(function(root) {
  'use strict';

  root.EditReviewForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    getStateFromStore: function() {
      var review = ReviewStore.find(parseInt(this.props.params.reviewId));
      review.errors = [];
      return review;
    },

    getInitialState: function() {
      return {};
    },

    editReview: function(e) {
      e.preventDefault();
      ApiUtil.clearErrors();
      var review = {};
      Object.keys(this.state).forEach(function(key) {
        if(key === 'anonymous') {
          review[key] = JSON.parse(this.state[key]);
        } else if(key !== 'body') {
          review[key] = parseInt(this.state[key]);
        } else {
          review[key] = this.state[key];
        }
      }.bind(this));
      ApiUtil.editReview(this.state.id, review);
    },

    _onChange: function() {
      if (ErrorStore.all().length !== 0) {
        this.setState({ errors: ErrorStore.all() });
      } else {
        this.setState(this.getStateFromStore());
      }
    },

    componentDidMount: function() {
      ReviewStore.addReviewChangeListener(this._onChange);
      ErrorStore.addErrorChangeListener(this._onChange);
      ApiUtil.fetchSingleReview(parseInt(this.props.params.reviewId));
    },

    componentWillUnmount: function() {
      ReviewStore.addReviewChangeListener(this._onChange);
      ErrorStore.addErrorChangeListener(this._onChange);
      ApiUtil.clearErrors();
    },

    componentWillReceiveProps: function(newProps) {
      this.setState({rev: ReviewStore.find(parseInt(this.props.params.reviewId))});
      ErrorStore.removeErrorChangeListener(this._onChange);
      ApiUtil.fetchSingleReview(parseInt(this.props.params.reviewId));
    },

    render: function() {
      if (this.state.professor === undefined) { return <div></div>; }
        if (this.state.user.id != window.CURRENT_USER_ID) {
        return <div></div>;
      }
      return(
        <div className="animated fadeInDownBig review-new">
            <ul id="errors">
              {
                this.state.errors.map(function(error) {
                  return <li>{error}</li>;
                })
              }
            </ul>
          <div className="review-form">

            <form onSubmit={this.editReview}>
            <br/>

            <h3>Edit Your Review for {this.state.professor.name}</h3>

            <br/>

              <div>
                <label htmlFor="review-anonymous">
                  Anonymous Review?
                  <br/>
                  <select id="anonymous" name="anonymous" valueLink={this.linkState('anonymous')}>
                    <option value="false">I don't care who sees!</option>
                    <option value="true">Put on Invisibility Cloak</option>
                  </select>
                </label>
              </div>

              <br/>

              <ul className="ratings">
              <li>
                <label htmlFor="review-ability">
                  Ability Rating:
                  <select id="ability" name="ability" valueLink={this.linkState('ability')}>
                    <option selected disabled hidden>{this.state.ability}</option>
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
                    <option selected disabled hidden>{this.state.easiness}</option>
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
                    <option selected disabled hidden>{this.state.helpfulness}</option>
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
                  <textarea id="review-body" placeholder="Write your review here..." valueLink={this.linkState('body')}>{this.state.body}</textarea>
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
