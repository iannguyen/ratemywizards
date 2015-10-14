(function(root) {
  'use strict';

  root.HouseDetail = React.createClass({
    getStatefromStore: function() {
      return { house: HouseStore.find(parseInt(this.props.params.houseId)) };
    },

    getInitialState: function() {
      return this.getStatefromStore();
    },

    _onChange: function() {
      this.setState(this.getStatefromStore());
    },

    componentWillReceiveProps: function(newProps) {
      ApiUtil.fetchHouse(parseInt(newProps.params.houseId));
    },

    componentDidMount: function() {
      HouseStore.addHouseDetailChangeListener(this._onChange);
      ApiUtil.fetchHouse(parseInt(this.props.params.houseId));
    },

    componentWillUnmount: function() {
      HouseStore.removeHouseDetailChangeListener(this._onChange);
    },

    render: function() {
      return(
        <div id='house-detail'>
          <p>
            //professors Index
          </p>
        </div>
      );
    }
  });

}(this));
