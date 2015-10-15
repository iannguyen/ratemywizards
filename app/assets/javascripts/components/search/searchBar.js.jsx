(function(root) {
  'use strict';

  root.SearchBar = React.createClass({
    getInitialState: function() {
      return { professors: root.ProfessorStore.all(), inputValue: null };
    },

    _onChange: function() {
      this.setState({
        professors: ProfessorStore.all(), inputValue: null
      });
    },

    componentDidMount: function() {
      ProfessorStore.addProfessorsChangeListener(this._onChange);
      ApiUtil.fetchAllProfessors();
    },

    componentWillUnmount: function() {
      ProfessorStore.removeProfessorsChangeListener(this._onChange);
    },

    handleInput: function(e) {
      this.setState({ inputValue: e.currentTarget.value });
    },

    handleFocus: function(e) {
      this.setState({ inputValue: "" });
    },

    handleBlur: function(e) {
      this.setState({ inputValue: null });
    },

    search: function() {
      var results = [];
      if(this.state.inputValue === null) {
        return results;
      } else if(this.state.inputValue.length === 0) {
        return this.state.professors;
      }
      var current = this.state.inputValue.toLowerCase();
      this.state.professors.forEach(function(prof) {
        if (prof.name.toLowerCase().indexOf(current) !== -1) {
          results.push(prof);
        }
      });
      if(results.length === 0) {
        results.push("No Wizards found..Perhaps you'd like to add this Wizard? :(");
      }
      return results;
    },

    render: function() {
      var searchResults = this.search();
      return (
        <div id="search-bar">
          <input type="text" onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.handleInput} value={this.state.inputValue} />
            <ul id="search-results">
              {
                searchResults.map(function(result) {
                  return <li>{result.name}</li>;
                })
              }
            </ul>
        </div>
      );
    }
  });

}(this));