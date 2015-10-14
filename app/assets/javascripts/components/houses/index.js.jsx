(function(root) {
  'use strict';

  root.HouseIndex = React.createClass({
    getInitialState: function() {
      return {
        houses: HouseStore.all()
      };
    },

    _onChange: function() {
      this.setState({
        houses: HouseStore.all()
      });
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
        <div className="house-index">
          {
            this.state.houses.map(function (house) {
              return <HouseTab house={house} key={house.id}/>;
            })
          }
        </div>
      );
    }
  });

}(this));
