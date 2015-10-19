(function(root) {
  'use strict';

  root.ApiActions = {
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
    receiveUser: function(user) {
      AppDispatcher.dispatch({
        actionType: UserConstants.USER_RECEIVED,
        user: user
      });
    }
  };

}(this));
