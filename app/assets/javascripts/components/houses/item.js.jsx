(function(root) {
  'use strict';

  root.ProfessorItem = React.createClass({
    mixins: [ReactRouter.History],

    showProfessor: function() {
      window.scrollTo(0,0);
      this.history.pushState(null, "/professors/" + this.props.professor.id);
    },

    overallRating: function() {
      var average = {
        overall: 0,
        count: 0,
      };
      if (this.props.professor.reviews) {
        var reviews = this.props.professor.reviews;
        average.count = reviews.length;
        reviews.forEach(function(review) {
          average.overall += review.ability;
          average.overall += review.easiness;
          average.overall += review.helpfulness;
        });
        average.overall = Math.round((average.overall / average.count * 3)) / 10;
      }
      return average;
    },

    render: function() {
      var overallRatings = this.overallRating();
      return(
          <div className="professor-item" onClick={this.showProfessor}>
              <img className="professor-thumbnail" src={this.props.professor.image_url}></img>
            <h3>{this.props.professor.name}</h3>
            <ul className="professor-overall">
              <li>Overall Rating: {overallRatings.overall}</li>
              <li>Total Reviews: {overallRatings.count}</li>
            </ul>
          </div>
        );
    }
  });

}(this));
