(function(root) {
  'use strict';

  root.ReviewItem = React.createClass({

    anonymousCheck: function() {
      var cloak = this.props.review.anonymous ? "blur-text" : "";
      return cloak;
    },

    showProfessor: function() {
      window.location = "/#/professors/" + this.props.review.professor_id;
    },

    render: function() {
      return(
        <li className="review-item">
          <div className={this.anonymousCheck() + " review-content"}>
            <div className="professor-thumb">
              <img onClick={this.showProfessor}src={this.props.review.professor.image_url}>
              </img>
            </div>

            <div className="review-ratings">
              <ul>
                <li>Ability: {this.props.review.ability}</li>
                <li>Easiness: {this.props.review.easiness}</li>
                <li>Helpfulness: {this.props.review.helpfulness}</li>
              </ul>
            </div>

            <div className="review-description">
              <p>{this.props.review.body}</p>
            </div>
            <div className="options">
              { this.props.review.user_id === window.CURRENT_USER_ID ? <EditAndDelete review={this.props.review}/> : <div></div> }
            </div>
          </div>
        </li>
      );
    }
  });

}(this));
