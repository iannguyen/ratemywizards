(function(root) {
  'use strict';

  root.ProfessorShow = React.createClass({
    getStatefromStore: function() {
      var prof  = ProfessorStore.find(parseInt(this.props.params.professorId));
      return { prof: prof };
    },

    getInitialState: function() {
      return {};
    },

    _onChange: function() {
      this.setState(this.getStatefromStore);
    },

    componentWillReceiveProps: function(newProps) {
      ApiUtil.fetchSingleProfessor(parseInt(newProps.params.professorId));
    },

    componentDidMount: function() {
      ProfessorStore.addProfessorsChangeListener(this._onChange);
      ApiUtil.fetchSingleProfessor(parseInt(this.props.params.professorId));
    },

    componentWillUnmount: function() {
      ProfessorStore.removeProfessorsChangeListener(this._onChange);
    },

    render: function() {
      return (
        <div id="professor-show">
          ALLL HAIL PROFESSOR SHOW PAGE
        </div>
      );
    }
  });

}(this));
