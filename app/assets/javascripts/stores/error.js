(function(root) {
  'use strict';

  var ERROR_CHANGED = 'ERROR_CHANGED';

  var _errors = [];

  var resetErrors = function(errors) {
    _errors = errors;
  };

  root.ErrorStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _errors;
    },

    addErrorChangeListener: function(callback) {
      this.on(ERROR_CHANGED, callback);
    },

    removeErrorChangeListener: function(callback) {
      this.removeListener(ERROR_CHANGED, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ErrorConstants.ERRORS_RECEIVED:
        debugger;
        resetErrors(payload.errors);
        ErrorStore.emit(ERROR_CHANGED);
        break;
      }
    })
  });
}(this));
