(function(root) {
  'use strict';

  var USER_CHANGED = 'USER_CHANGED';

  var _user = [];

  var resetUser = function(user) {
    _user = user;
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    find: function() {
      return _user;
    },

    addUserChangeListener: function(callback) {
      this.on(USER_CHANGED, callback);
    },

    removeUserChangeListener: function(callback) {
      this.removeListener(USER_CHANGED, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case UserConstants.USER_RECEIVED:
        resetUser(payload.user);
        UserStore.emit(USER_CHANGED);
        break;
      }
    })
  });
}(this));
