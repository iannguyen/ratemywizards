(function(root) {
  'use strict';

  root.ApiUtil = {
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
