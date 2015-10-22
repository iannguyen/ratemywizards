(function(root) {
  'use strict';

  root.ApiUtil = {
    fetchSingleReview: function(id) {
      $.ajax({
        url: "/api/reviews/" + id,
        method: "get",
        success: function(response) {
          ApiActions.receiveReview(response);
        }
      });
    },
    createReview: function(data, callback) {
      $.ajax({
        url: "/api/reviews",
        method: "post",
        data: {review: data},
        success: function(professor) {
          ApiActions.receiveProfessor(professor);
          window.location = "/#/professors/" + professor.id;
        },
        error: function(errors) {
          ApiActions.receiveErrors(errors.responseJSON.failures);
        }
      });
    },
    editReview: function(id, data) {
      $.ajax({
        url: "/api/reviews/" + id,
        method: "patch",
        dataType: "json",
        data: {review: data},
        success: function(user) {
          ApiActions.receiveUser(user);
          window.location = "/#/users/" + user.id;
        }
      });
    },
    deleteReview: function(id, callback) {
      $.ajax({
        url: "/api/reviews/" + id,
        method: "delete",
        success: function(data) {
          ApiActions.receiveUser(data);
          window.location = "/#/users/" + data.id;
        },
        failure: function(error) {
        }
      });
    },
    editProfPhoto: function(id, image_url) {
      $.ajax({
        url: "/api/professors/" + id,
        method: "patch",
        dataType: "json",
        data: {professor: image_url},
        success: function(response) {
          ApiActions.receiveProfessor(response);
        }
      });
    },
    editUserPhoto: function(id, image_url) {
      $.ajax({
        url: "/api/users/" + id,
        method: "patch",
        dataType: "json",
        data: {user: image_url},
        success: function(response) {
          ApiActions.receiveUser(response);
        }
      });
    },
    createProfessor :function(data) {
      $.ajax({
        url: "/api/professors",
        method: "post",
        data: {professor: data},
        success: function(response) {
          ApiActions.receiveProfessor(response);
          window.location = "/#/professors/" + response.id;
        }
      });
    },
    fetchAllHouses: function() {
      $.ajax({
        url: "/api/houses",
        method: "get",
        success: function(response) {
          ApiActions.receiveHouses(response);
        }
      });
    },
    fetchSingleHouse: function(id) {
      $.ajax({
        url: "/api/houses/" + id,
        method: "get",
        success: function(response) {
          ApiActions.receiveHouse(response);
        }
      });
    },
    fetchAllProfessors: function() {
      $.ajax({
        url: "/api/professors",
        method: "get",
        success:function(response) {
          ApiActions.receiveProfessors(response);
        }
      });
    },
    fetchAllUsers: function() {
      $.ajax({
        url: "/api/users",
        method: "get",
        success: function(response) {
          ApiActions.receiveUsers(response);
        }
      });
    },
    fetchSingleUser: function(id) {
      $.ajax({
        url: "/api/users/" + id,
        method: "get",
        success: function(response) {
          ApiActions.receiveUser(response);
        }
      });
    },
    fetchSingleProfessor: function(id) {
      $.ajax({
        url: "/api/professors/" + id,
        method: "get",
        success: function(professor) {
          ApiActions.receiveProfessor(professor);
          console.log(professor);
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
