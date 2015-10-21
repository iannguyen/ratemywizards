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
        success: function(professor) {
          ApiActions.receiveProfessor(professor);
          callback && callback(professor.id);
        },
        // error: function(errors) {
        //   debugger;
        //   ApiActions.receiveErrors(errors.responseJSON.failures);
        //   console.log(errors.responseJSON.failures);
        // }
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
          console.log(user);
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
          console.log(data);
          window.location = "/#/users/" + data.id;
        },
        failure: function(error) {
          console.log(error);
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
          console.log(response);
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
          console.log(response);
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
          console.log(data);
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
    fetchAllUsers: function() {
      $.ajax({
        url: "/api/users",
        method: "get",
        success: function(response) {
          ApiActions.receiveUsers(response);
          console.log(response);
        }
      });
    },
    fetchSingleUser: function(id) {
      $.ajax({
        url: "/api/users/" + id,
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
