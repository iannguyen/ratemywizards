(function(root) {
  'use strict';

  var PROFESSORS_CHANGED = 'PROFESSORS_CHANGED';

  var _professors = [];

  var resetProfessors = function(professors) {
    _professors = professors;
  };

  root.ProfessorStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _professors.slice();
    },

    find: function(id) {
      var found;
      _professors.forEach(function(professor) {
        if (id === professor.id) {
          found = professor;
        }
      });
      return found;
    },

    addProfessorsChangeListener: function(callback) {
      this.on(PROFESSORS_CHANGED, callback);
    },

    removeProfessorsChangeListener: function(callback) {
      this.removeListener(PROFESSORS_CHANGED, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ProfessorConstants.PROFESSORS_RECEIVED:
          resetProfessors(payload.professors);
          ProfessorStore.emit(PROFESSORS_CHANGED);
          break;
      }
    })
  });
}(this));
