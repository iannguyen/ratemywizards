(function(root) {
  'use strict';

  root.ReviewForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    defaultAttributes: {
      anonymous: false,
      body: '',
      ability: 1,
      easiness: 1,
      helpfulness: 1
    },

    getInitialState: function() {
      return this.defaultAttributes;
    },

    createReview: function(e) {
      e.preventDefault();
    },

    render: function() {
      return(
        <div class="review-form">
          <h3>Create a Review</h3>
          <form onSumbit={this.createReview}>

            <div>
              <label htmlFor="review-anonymous">
                Anonymous Review?
                <br/>
                <select id="anonymous" name="anonymous">
                  <option value="true">I want to be hidden...</option>
                  <option value="false">I don't care who sees!</option>
                </select>
              </label>
            </div>

            <br/>
            
            <ul>
            <div>
              <label htmlFor="review-ability">
                Ability Rating:
                <select id="ability" name="ability">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>

            <br/>

            <div>
              <label htmlFor="review-easiness">
                Easiness Rating:
                <select id="easiness" name="easiness">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>

            <br/>
            <div>
              <label htmlFor="review-helpfulness">
                Helpfulness Rating:
                <select id="helpfulness" name="helpfulness">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>
            </ul>

            <br/>
            <div>
              <label htmlFor="review-body">
                <textarea id="review-body" placeholder="Write your review here..."></textarea>
              </label>
            </div>

            <button>I'm Finished!</button>

          </form>
        </div>
      );
    }
  });

}(this));
