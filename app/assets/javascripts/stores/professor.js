(function(root) {
  'use strict';

  var PROFESSORS_CHANGED = 'PROFESSORS_CHANGED';
  var PROFESSOR_CHANGED = 'PROFESSOR_CHANGED';

  var _professors = [];

  var resetProfessors = function(professors) {
    _professors = professors;
  };

  var resetProfessor = function(prof) {
    var switched = false;
    _professors.forEach(function(p) {
      if (p.id === prof.id) {
        _professors[_professors.indexOf(p)] = prof;
        switched = true;
      }
    });
    if (!switched) { _professors.push(prof); }
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

    addProfessorChangeListener: function(callback) {
      this.on(PROFESSOR_CHANGED, callback);
    },

    removeProfessorChangeListener: function(callback) {
      this.removeListener(PROFESSOR_CHANGED, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ProfessorConstants.PROFESSORS_RECEIVED:
          resetProfessors(payload.professors);
          ProfessorStore.emit(PROFESSORS_CHANGED);
          break;
        case ProfessorConstants.PROFESSOR_RECEIVED:
          resetProfessor(payload.professor);
          ProfessorStore.emit(PROFESSOR_CHANGED);
          break;
      }
    })
  });
}(this));
