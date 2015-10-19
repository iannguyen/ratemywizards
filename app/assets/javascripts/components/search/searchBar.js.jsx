(function(root) {
  'use strict';

  root.SearchBar = React.createClass({
    getInitialState: function() {
      return { professors: root.ProfessorStore.all(), inputValue: "", focused: false };
    },

    _onChange: function() {
      this.setState({
        professors: ProfessorStore.all(), inputValue: ""
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
      this.setState({ inputValue: e.currentTarget.value, focused: true });
    },

    focusedFalse: function(e) {
      this.setState({ focused: false });
    },

    focusedTrue: function() {
      this.setState({ focused: true });
    },

    search: function() {
      var results = [];
      if(this.state.focused) {
        if(this.state.inputValue === "" || this.state.inputValue === null) { return results; }
        var current = this.state.inputValue.toLowerCase();
        this.state.professors.forEach(function(prof) {
          if (prof.name.toLowerCase().indexOf(current) !== -1) {
            results.push(prof);
          }
        });
        if(results.length === 0) {
          results.push("No Wizards found..Perhaps you'd like to add this Wizard?");
        }
      }
      return results;
    },

    render: function() {
      var searchResults = this.search();
      return (
        <div id="search-bar">
          <h1 id="search-heading">Search for a Wizard</h1>
          <input type="text" onFocus={this.focusedTrue}  onBlur={this.focusedFalse} onChange={this.handleInput} value={this.state.inputValue} />
            <ul id="search-results">
              {
                searchResults.map(function(result) {
                  if (typeof result === "string") {
                    return <p className="no-results">{result}</p>;
                  } else {
                    return <li className={result.house.name.toLowerCase() + " search-result"}>
                              <ProfessorItem
                                key={result.id}
                                professor={result}/>
                            </li>;
                  }
                })
              }
            </ul>
        </div>
      );
    }
  });

}(this));
