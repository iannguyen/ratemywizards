(function(root) {
  'use strict';

  root.ApiUtil = {
    fetchHouses: function() {
      $.ajax({
        url: "/api/houses",
        method: "get",
        success: function(response) {
          ApiActions.receiveHouses(response);
        }
      });
    },
    fetchHouse: function(id) {
      $.ajax({
        url: "/api/houses/" + id,
        method: "get",
        success: function(response) {
          ApiActions.receiveHouse(response);
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
