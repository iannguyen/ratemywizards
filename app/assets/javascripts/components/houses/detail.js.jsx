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
        <div className='house-detail'>
          <ul>
            {
              this.state.house.professors.map(function(professor) {
                return <li>{professor.name}</li>;
              })
            }
          </ul>
        </div>
      );
    }
  });

}(this));
