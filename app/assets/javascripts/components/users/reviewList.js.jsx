(function(root) {
  'use strict';

  root.ReviewList = React.createClass({
    render: function() {
      return(
        <div className="user-reviews">
          <h2>My Reviews</h2>
          <ul className="review-list">
            {
              this.props.reviews.map(function(review) {
                return <ReviewItem review={review} />;
              })
            }
          </ul>
        </div>
      );
    }
  });

}(this));
