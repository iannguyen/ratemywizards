(function(root) {
  'use strict';

  root.ReviewList = React.createClass({
    getInitialState: function() {
      return { reviews: this.props.reviews };
    },

    render: function() {
      var that = this;
      return(
        <div className="animated fadeInDown user-reviews">
          <div className="reviews-list">

          <h2>{window.CURRENT_USER_ID === this.props.user.id ? "My Reviews" : this.props.user.username + "'s Reviews"}</h2>
          <ul className="review-list">
            {
              this.props.reviews.map(function(review) {
                return <ReviewItem key={review.id} review={review} />;
              })
            }
          </ul>

          </div>
        </div>
      );
    }
  });

}(this));
