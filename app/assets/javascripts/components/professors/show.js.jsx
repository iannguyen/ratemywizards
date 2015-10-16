(function(root) {
  'use strict';

  root.ProfessorShow = React.createClass({
    getStateFromStore: function() {
      var prof  = ProfessorStore.find(parseInt(this.props.params.professorId));
      return { prof: prof };
    },

    getInitialState: function() {
      return {prof: {}};
    },

    _onChange: function() {
      this.setState(this.getStateFromStore());
    },

    componentWillReceiveProps: function(newProps) {
      ApiUtil.fetchSingleProfessor(parseInt(newProps.params.professorId));
    },

    componentDidMount: function() {
      ProfessorStore.addProfessorChangeListener(this._onChange);
      ApiUtil.fetchSingleProfessor(parseInt(this.props.params.professorId));
    },

    componentWillUnmount: function() {
      ProfessorStore.removeProfessorChangeListener(this._onChange);
    },

    getProfAverage: function() {
      var reviews;
      var average = {
        ability: 0,
        easiness: 0,
        helpfulness: 0
      };
      if (this.state.prof.reviews && this.state.prof.reviews !== 0) {
        reviews = this.state.prof.reviews;
        reviews.forEach(function(review) {
          average.ability += review.ability;
          average.easiness += review.easiness;
          average.helpfulness += review.helpfulness;
        });
        Object.keys(average).forEach(function(attr) {
          average[attr] = Math.round(average[attr] / reviews.length * 10) / 10;
      });
      }
      return average;
    },

    render: function() {
      var averages = this.getProfAverage();
      return (
        <div id="professor-show">
          <h2>ALLL HAIL PROFESSOR SHOW PAGE</h2>
          <ul id="averages">
              {
                Object.keys(averages).map(function(attr) {
                  return <li>Average {attr}: {averages[attr]}</li>;
                })
              }
          </ul>
        </div>
      );
    }
  });

}(this));
