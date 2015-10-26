(function(root) {
  'use strict';

  root.LikeButton = React.createClass({
    getInitialState: function() {
      return {liked: this.hasLiked()};
    },

    _onChange: function() {
      this.setState({liked: this.hasLiked()});
    },

    likeReview: function(e) {
      e.preventDefault();
      var that = this;
      ApiUtil.createLike({review_id: this.props.review.id}, function() {
        that._onChange();
      });
    },

    unlikeReview: function(e) {
      e.preventDefault();
      var that = this;
      var userLike;
      this.props.review.likes.forEach(function(like) {
        if(like.user_id === window.CURRENT_USER_ID) {
          userLike = like;
        }
      });
      var unlikeObj = {
        review_id: this.props.review.id,
        like_id: userLike.id
      };
      if (userLike) {
        ApiUtil.deleteLike(unlikeObj, function() {
          that._onChange();
        });
      }
    },

    hasLiked: function() {
      var liked = false;
      this.props.review.likes.forEach(function(like) {
        if (window.CURRENT_USER_ID && like.user_id === parseInt(window.CURRENT_USER_ID)) {
          liked = true;
        }
      });
      return liked;
    },

    displayOrHide: function() {
      var display;
      if (window.CURRENT_USER_ID && !this.state.liked) {
        display =  (<button className="like" onClick={this.likeReview}>Like this review?</button>);
      } else if (window.CURRENT_USER_ID && this.state.liked){
        display = (<button className="unlike" onClick={this.unlikeReview}>Unlike!</button>);
      }
      return display;
    },

    render: function() {
      return(
        <div className="like-button">
          {this.displayOrHide()}
        </div>
      );
    }
  });

}(this));
