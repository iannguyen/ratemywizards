(function(root) {
  'use strict';

  root.ReviewItem = React.createClass({
    render: function() {
      debugger;
      return(
        <li className="review-item">
          <div className="review-content">
            <div className="professor-thumb">
              <img src={this.props.review.professor.image_url}></img>
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
          </div>
        </li>
      );
    }
  });

}(this));
