(function(root) {
  'use strict';

  root.LikeButton = React.createClass({
    getInitialState: function() {
      return {liked: this.hasLiked()};
    },

    _onChange: function() {
      this.setState({liked: this.hasLiked()});
    },

    componentDidMount: function() {
      ProfessorStore.addProfessorChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      ProfessorStore.addProfessorChangeListener(this._onChange);
    },

    likeReview: function(e) {
      e.preventDefault();
      ApiUtil.createLike({review_id: this.props.review.id});
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
        display =  (<button className="like btn" onClick={this.likeReview}>Like!</button>);
      } else {
        display = (<div></div>);
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
