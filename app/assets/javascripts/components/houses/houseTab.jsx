(function(root) {
  'use strict';

  root.HouseTabs = React.createClass({
    getInitialState: function() {
      debugger;
      return { houses: HouseStore.all() };
    },

    _onChange: function() {
      this.setState({ houses: HouseStore.all() });
    },

    componentDidMount: function() {
      HouseStore.addHouseChangeListener(this._onChange);
      ApiUtil.fetchHouses();
    },

    componentWillUnmount: function() {
      HouseStore.removeHouseChangeListener(this._onChange);
    },

    render: function() {
      return (
        <div>
          {
            this.state.houses.map(function(house) {
              return <HouseDetail key={house.id} house={house} />;
            })
          }
        </div>
      );
    }
  });

}(this));
