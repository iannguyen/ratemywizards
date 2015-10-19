(function(root) {
  'use strict';

  root.ReviewDetail = React.createClass({
    anonymousCheck: function() {
      var hidden = {};
      if (this.props.review.anonymous) {
        hidden.username = "";
        hidden.image_url = "http://res.cloudinary.com/dms46o1eu/image/upload/v1445156629/Sorting_Hat_mihhnq.jpg";
      } else if (this.props.review.user.image_url === null) {
        hidden.username = this.props.review.user.username;
        hidden.image_url = "http://res.cloudinary.com/dms46o1eu/image/upload/v1445156629/Sorting_Hat_mihhnq.jpg";
      } else {
        hidden.username = this.props.review.user.username;
        hidden.image_url = this.props.review.user.image_url;
      }
      return hidden;
    },

    render: function() {
      var review = this.props.review;
      var showOrHide = this.anonymousCheck();
        return(
          <div className="review-detail">
            <div className="review-ratings">
              <div className="review-bio">
                {showOrHide.username}
                <img className="review-thumb" src={showOrHide.image_url}/>
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