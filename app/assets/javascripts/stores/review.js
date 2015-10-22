(function(root) {
  'use strict';

  var REVIEW_CHANGED = 'REVIEW_CHANGED';

  var _reviews = [];
  var _review = [];

  var resetReviews = function(reviews) {
    _reviews = reviews;
  };

  var resetReview = function(review) {
    _review = review;
  };

  root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _reviews;
    },

    find: function(id) {
      return _review;
    },

    addReviewChangeListener: function(callback) {
      this.on(REVIEW_CHANGED, callback);
    },

    removeReviewChangeListener: function(callback) {
      this.removeListener(REVIEW_CHANGED, callback);
    },

    addReviewsChangeListener: function(callback) {
      this.on(REVIEWS_CHANGED, callback);
    },

    removeReviewsChangeListener: function(callback) {
      this.removeListener(REVIEWS_CHANGED, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ReviewConstants.REVIEWS_RECEIVED:
        resetReviews(payload.reviews);
        ReviewStore.emit(REVIEWS_CHANGED);
        break;
        case ReviewConstants.REVIEW_RECEIVED:
        resetReview(payload.review);
        ReviewStore.emit(REVIEW_CHANGED);
        break;
      }
    })
  });
}(this));
