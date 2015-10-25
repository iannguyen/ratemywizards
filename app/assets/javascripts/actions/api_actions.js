(function(root) {
  'use strict';

  root.ApiActions = {
    receiveMessage: function(message) {
      AppDispatcher.dispatch({
        actionType: MessageConstants.MESSAGE_RECEIVED,
        message: message
      });
    },
    receiveErrors: function(errors) {
      AppDispatcher.dispatch({
        actionType: ErrorConstants.ERRORS_RECEIVED,
        errors: errors
      });
    },
    receiveHouses: function(houses) {
      AppDispatcher.dispatch({
        actionType: HouseConstants.HOUSES_RECEIVED,
        houses: houses
      });
    },
    receiveHouse: function(house) {
      AppDispatcher.dispatch({
        actionType: HouseConstants.HOUSE_RECEIVED,
        house: house
      });
    },
    receiveReview: function(review) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEW_RECEIVED,
        review: review
      });
    },
    receiveProfessors: function(professors) {
      AppDispatcher.dispatch({
        actionType: ProfessorConstants.PROFESSORS_RECEIVED,
        professors: professors
      });
    },
    receiveProfessor: function(professor) {
      AppDispatcher.dispatch({
        actionType: ProfessorConstants.PROFESSOR_RECEIVED,
        professor: professor
      });
    },
    receiveUsers: function(user) {
      AppDispatcher.dispatch({
        actionType: UserConstants.USERS_RECEIVED,
        users: users
      });
    },
    receiveUser: function(user) {
      AppDispatcher.dispatch({
        actionType: UserConstants.USER_RECEIVED,
        user: user
      });
    }
  };

}(this));
