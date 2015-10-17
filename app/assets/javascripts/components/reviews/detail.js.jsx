(function(root) {
  'use strict';

  root.ReviewDetail = React.createClass({
    render: function() {
      var review = this.props.review;
        return(
          <div className="review-detail">
            <div className="review-ratings">
              <div className="review-bio">
                {review.user.username}
                <img className="review-thumb" src={review.user.image_url}/>
              </div>
              <ul>
                <li>Ability: {review.ability}</li>
                <li>Easiness: {review.easiness}</li>
                <li>Helpfulness: {review.helpfulness}</li>
              </ul>
            </div>
            <div className="review-description">
              <p>
                {review.body}
              </p>
            </div>
          </div>
        );
    }
  });

}(this));
