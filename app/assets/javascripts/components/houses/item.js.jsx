(function(root) {
  'use strict';

  root.ProfessorItem = React.createClass({
    mixins: [ReactRouter.History],

    showProfessor: function() {
      window.scrollTo(0,0);
      this.history.pushState(null, "/professors/" + this.props.professor.id);
    },

    render: function() {
      return(
          <div onClick={this.showProfessor}>
            {this.props.professor.name}
          </div>
        );
    }
  });

}(this));
