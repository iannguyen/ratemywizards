(function(root) {
  'use strict';

  root.ApiUtil = {
    createReview: function(data, callback) {
      $.ajax({
        url: "/api/reviews",
        method: "post",
        data: {data: data},
        success: function(response) {
          console.log(response);
        }
      });
    },
    fetchAllHouses: function() {
      $.ajax({
        url: "/api/houses",
        method: "get",
        success: function(response) {
          ApiActions.receiveHouses(response);
          console.log(response);
        }
      });
    },
    fetchSingleHouse: function(id) {
      $.ajax({
        url: "/api/houses/" + id,
        method: "get",
        success: function(response) {
          ApiActions.receiveHouse(response);
          console.log(response);
        }
      });
    },
    fetchAllProfessors: function() {
      $.ajax({
        url: "/api/professors",
        method: "get",
        success:function(response) {
          ApiActions.receiveProfessors(response);
          console.log(response);
        }
      });
    },
    fetchSingleProfessor: function(id) {
      $.ajax({
        url: "/api/professors/" + id,
        method: "get",
        success: function(response) {
          ApiActions.receiveProfessor(response);
          console.log(response);
        }
      });
    },
    signIn: function() {
      $.ajax({
        success: function() {
          window.location = '/session/new';
        }
      });
    },
    signOut: function() {
      $.ajax({
        url: "/session",
        method: "delete",
        success: function() {
          window.location = "/";
        }
      });
    }
  };

}(this));
