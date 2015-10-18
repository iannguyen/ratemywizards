(function(root) {
  'use strict';

  root.HouseDetail = React.createClass({
    getStatefromStore: function() {
      var house  = HouseStore.find(parseInt(this.props.params.houseId));
      return { house: house };
    },

    getInitialState: function() {
      return {};
    },

    _onChange: function() {
      this.setState(this.getStatefromStore());
    },

    showProfessor: function(id) {
      this.props.history.pushState(null, "/professors/" + id);
    },

    componentWillReceiveProps: function(newProps) {
      ApiUtil.fetchSingleHouse(parseInt(newProps.params.houseId));
    },

    componentDidMount: function() {
      HouseStore.addHouseDetailChangeListener(this._onChange);
      ApiUtil.fetchSingleHouse(parseInt(this.props.params.houseId));
    },

    componentWillUnmount: function() {
      HouseStore.removeHouseDetailChangeListener(this._onChange);
    },

    render: function() {
      if (this.state.house === undefined) { return <div></div>; }

      return(
        <div id="house-detail">
          <ul id="house-detail-list">
            {
              this.state.house.professors.map(function(professor) {
                return (
                  <li>
                    <ProfessorItem
                      key={professor.id}
                      professor={professor} />
                  </li>
                );
              }.bind(this))
            }
          </ul>
        </div>
      );
    }
  });

}(this));
