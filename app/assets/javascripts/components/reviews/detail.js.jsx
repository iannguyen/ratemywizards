(function(root) {
  'use strict';

  root.ReviewDetail = React.createClass({
    getInitialState: function() {
      return {review: this.props.review};
    },

    _onChange: function() {
      this.setState({ review: ReviewStore.find(parseInt(this.props.review.id)) });
    },

    componentDidMount: function() {
      ReviewStore.addReviewChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      ReviewStore.removeReviewChangeListener(this._onChange);
    },

    anonymousCheck: function() {
      var hidden = {};
      if (this.props.review.anonymous) {
        hidden.username = "";
        hidden.image_url = "http://res.cloudinary.com/dms46o1eu/image/upload/v1445329304/800px-Dementor_Prisoner_of_Azkaban_kouje2.jpg";
      } else if (this.props.review.user.image_url === null) {
        hidden.username = this.props.review.user.username;
        hidden.image_url = "http://res.cloudinary.com/dms46o1eu/image/upload/v1445156629/Sorting_Hat_mihhnq.jpg";
      } else {
        hidden.username = this.props.review.user.username;
        hidden.image_url = this.props.review.user.image_url;
      }
      return hidden;
    },

    handleClick: function() {
      window.location = "/#/users/" + this.props.review.user_id;
    },

    render: function() {
      var review = this.props.review;
      var showOrHide = this.anonymousCheck();
      var pluralize = this.props.review.likeCount > 1 ? "s" : "";
        return(
          <div className="review-detail">
            <div className="review-ratings">
              <div className="review-bio">
                {showOrHide.username}
                <img className="review-thumb"
                     src={showOrHide.image_url}
                     onClick={this.handleClick}/>
              </div>
              <ul>
                <li>Ability: {review.ability}</li>
                <li>Easiness: {review.easiness}</li>
                <li>Helpfulness: {review.helpfulness}</li>

              </ul>
            {
              this.props.review.likeCount === 0 ?
                <div></div> :
                  <div className="like-count">
                        {this.props.review.likeCount} wizard{pluralize} found this review helpful.
                  </div>
            }
            </div>
            <div className="review-description">
              <p>
                {review.body}
              </p>
              <LikeButton review={this.props.review}/>
            </div>
          </div>
        );
    }
  });

}(this));
