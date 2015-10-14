(function(root) {
  'use strict';

  root.ApiActions = {
    receiveHouses: function(houses) {
      AppDispatcher.dispatch({
        actionType: HouseConstants.HOUSES_RECEIVED,
        houses: houses
      });
    }

  };

}(this));
