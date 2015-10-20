(function(root) {
  'use strict';

  root.EditReviewForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    getStateFromStore: function() {
      var review = ReviewStore.find(parseInt(this.props.paramsiewId));
      return review;
    },

    getInitialState: function() {
      return {};
    },

    editReview: function(e) {
      e.preventDefault();
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
        ApiUtil.editReview(this.state.user.id, review, function() {
          this.props.history.pushState(null, 'users/' + this.state.user.id, {});
        }.bind(this));
    },

    _onChange: function() {
      this.setState(this.getStateFromStore());
    },

    componentDidMount: function() {
      ReviewStore.addReviewChangeListener(this._onChange);
      ApiUtil.fetchSingleReview(parseInt(this.props.params.reviewId));
    },

    componentWillReceiveProps: function(newProps) {
      this.setState({rev: ReviewStore.find(parseInt(this.props.params.reviewId))});
      ApiUtil.fetchSingleReview(parseInt(this.props.params.reviewId));
    },

    render: function() {
      if (this.state.professor === undefined) { return <div></div>; }
        if (this.state.user.id != window.CURRENT_USER_ID) {
        return <div></div>;
      }
      debugger;
      return(
        <div className="review-new">
          <div className="review-form">
            <h3>Edit Your Review for {this.state.professor.name}</h3>

            <br/>

            <form onSubmit={this.editReview}>

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
                    <option selected="selected">{this.state.ability}</option>
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
                    <option selected="selected">{this.state.easiness}</option>
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
                    <option selected="selected">{this.state.helpfulness}</option>
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
