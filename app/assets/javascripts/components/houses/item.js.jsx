(function(root) {
  'use strict';

  root.ProfessorItem = React.createClass({
    mixins: [ReactRouter.History],

    showProfessor: function() {
      window.scrollTo(0,0);
      this.history.pushState(null, "/professors/" + this.props.professor.id);
    },

    render: function() {
      var professor = this.props.professor;
      return(
          <div className="professor-item" onMouseDown={this.showProfessor}>

            <img className="professor-thumbnail" src={professor.image_url}></img>

            <h3>{professor.name}</h3>

            <ul className="professor-overall">

              <li>Overall Rating: {professor.overall_average}</li>
              <li>Total Reviews: {professor.review_count}</li>

            </ul>

          </div>
        );
    }
  });

}(this));
