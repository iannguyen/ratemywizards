(function(root) {
  'use strict';

  var USERS_CHANGED = "USERS_CHANGED";
  var USER_CHANGED = 'USER_CHANGED';

  var _users = [];
  var _user = [];

  var resetUsers= function(users) {
    _users = users;
  };

  var resetUser = function(user) {
    _user = user;
  };

  root.UserStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _users;
    },
    find: function(id) {
      // var found;
      // _users.forEach(function(user) {
      //   if (user.id === id) {
      //     found = user;
      //   }
      // });
      // return found;
      return _user;
    },

    addUserChangeListener: function(callback) {
      this.on(USER_CHANGED, callback);
    },

    removeUserChangeListener: function(callback) {
      this.removeListener(USER_CHANGED, callback);
    },

    addUsersChangeListener: function(callback) {
      this.on(USERS_CHANGED, callback);
    },

    removeUsersChangeListener: function(callback) {
      this.removeListener(USERS_CHANGED, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case UserConstants.USERS_RECEIVED:
          resetUsers(payload.users);
          UserStore.emit(USERS_CHANGED);
        break;
        case UserConstants.USER_RECEIVED:
          resetUser(payload.user);
          UserStore.emit(USER_CHANGED);
        break;
      }
    })
  });
}(this));
