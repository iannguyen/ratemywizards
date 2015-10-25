(function(root) {
  'use strict';

  var MESSAGE_CHANGED = 'MESSAGE_CHANGED';

  var _message = [];

  var resetMessage = function(message) {
    _message = message;
  };

  root.MessageStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _message;
    },

    addMessageChangeListener: function(callback) {
      this.on(MESSAGE_CHANGED, callback);
    },

    removeMessageChangeListener: function(callback) {
      this.removeListener(MESSAGE_CHANGED, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case MessageConstants.MESSAGE_RECEIVED:
        resetMessage(payload.message);
        MessageStore.emit(MESSAGE_CHANGED);
        break;
      }
    })
  });
}(this));
