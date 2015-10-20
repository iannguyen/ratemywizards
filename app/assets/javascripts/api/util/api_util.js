(function(root) {
  'use strict';

  root.ApiUtil = {
    fetchSingleReview: function(id) {
      $.ajax({
        url: "/api/reviews/" + id,
        method: "get",
        success: function(response) {
          ApiActions.receiveReview(response);
          console.log(response);
        }
      });
    },
    createReview: function(data, callback) {
      $.ajax({
        url: "/api/reviews",
        method: "post",
        data: {review: data},
        success: function(data) {
          ApiActions.receiveProfessor(data);
          callback && callback(data.id);
        },
      });
    },
    editReview: function(id, data, callback) {
      $.ajax({
        url: "/api/reviews/" + id,
        method: "patch",
        dataType: "json",
        data: {review: data},
        success: function(data) {
          ApiActions.receiveReview(data);
          console.log(data);
          callback && callback(data.user_id);
        }
      });
    },
    deleteReview: function(id, callback) {
      $.ajax({
        url: "/api/reviews" + id,
        method: "delete",
        success: function(data) {
          console.log(data);
          callback && callback(data.user_id);
        }
      });
    },
    createProfessor :function(data, callback) {
      $.ajax({
        url: "/api/professors",
        method: "post",
        data: {professor: data},
        success: function(response) {
          debugger;
          ApiActions.receiveProfessor(response);
          console.log(data);
          callback && callback(response.id);
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
    fetchSingleUser: function(id) {
      $.ajax({
        url: "api/users/" + id,
        method: "get",
        success: function(response) {
          ApiActions.receiveUser(response);
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
