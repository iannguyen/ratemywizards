(function(root) {
  'use strict';

  var _houses = [];
  var HOUSE_INDEX_CHANGE_EVENT = 'HOUSE_INDEX_CHANGE_EVENT';

  var resetHouses = function(houses) {
    _houses = houses;
  };

  root.HouseStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _houses.slice();
    },

    addHouseChangeListener: function(callback) {
      this.on(HOUSE_INDEX_CHANGE_EVENT, callback);
    },

    removeHouseChangeListener: function(callback) {
      this.removeListener(HOUSE_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case HouseConstants.HOUSES_RECEIVED:
          resetHouses(payload.houses);
          HouseStore.emit(HOUSE_INDEX_CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
