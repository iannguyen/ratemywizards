(function(root) {
  'use strict';

  var _houses = [];
  var HOUSE_INDEX_CHANGE_EVENT = 'HOUSE_INDEX_CHANGE_EVENT';
  var HOUSE_DETAIL_CHANGE_EVENT = 'HOUSE_DETAIL_CHANGE_EVENT';

  var resetHouses = function(houses) {
    _houses = houses;
  };

  var resetHouse = function(house) {
    var switched = false;
    _houses.forEach(function(h) {
      if (h.id === house.id) {
        _houses[_houses.indexOf(h)] = house;
        switched = true;
      }
    });
    if (!switched) { _house.push(house); }
  };

  root.HouseStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _houses.slice();
    },

    find: function(id) {
      var found;
      _houses.forEach(function(house) {
        if (house.id === id) {
          found = house;
        }
      });
      return found;
    },

    addHouseChangeListener: function(callback) {
      this.on(HOUSE_INDEX_CHANGE_EVENT, callback);
    },

    removeHouseChangeListener: function(callback) {
      this.removeListener(HOUSE_INDEX_CHANGE_EVENT, callback);
    },

    addHouseDetailChangeListener: function(callback) {
      this.on(HOUSE_DETAIL_CHANGE_EVENT, callback);
    },

    removeHouseDetailChangeListener: function(callback) {
      this.removeListener(HOUSE_DETAIL_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case HouseConstants.HOUSES_RECEIVED:
          resetHouses(payload.houses);
          HouseStore.emit(HOUSE_INDEX_CHANGE_EVENT);
          break;
        case HouseConstants.HOUSE_RECEIVED:
          resetHouse(payload.house);
          HouseStore.emit(HOUSE_DETAIL_CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
