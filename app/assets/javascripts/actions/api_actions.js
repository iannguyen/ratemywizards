(function(root) {
  'use strict';

  root.ApiActions = {
    receiveHouses: function(houses) {
      AppDispatcher.dispatch({
        actionType: HouseConstants.HOUSES_RECEIVED,
        houses: houses
      });
    },
    receiveHouse: function(house) {
      AppDispatcher.dispatch({
        actionType: HouseConstants.HOUSE_RECEIVED,
        house: house
      });
    }
  };

}(this));
