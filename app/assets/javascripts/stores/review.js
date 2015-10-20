(function(root) {
  'use strict';

  var REVIEW_CHANGED = 'REVIEW_CHANGED';

  var _review = [];

  var resetReview = function(review) {
    _review = review;
  };

  root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    find: function(id) {
      return _review;
    },

    addReviewChangeListener: function(callback) {
      this.on(REVIEW_CHANGED, callback);
    },

    removeReviewChangeListener: function(callback) {
      this.removeListener(REVIEW_CHANGED, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ReviewConstants.REVIEW_RECEIVED:
        resetReview(payload.review);
        ReviewStore.emit(REVIEW_CHANGED);
        break;
      }
    })
  });
}(this));
