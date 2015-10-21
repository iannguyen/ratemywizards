(function(root) {
  'use strict';

  root.CLWUser = React.createClass({
    upload: function(e) {
      e.preventDefault();
      cloudinary.openUploadWidget({upload_preset: window.CLOUDINARY.upload_preset},
      this.updateUserPhoto);
    },

    updateUserPhoto: function(error, result, callback) {
      if(error) { return; }
      var fitted = "w_400,h_400,c_fit";
      var url = result[0].secure_url;
      var splittedUrl = url.split('/');
      var insertPoint = splittedUrl.indexOf('upload') + 1;
      splittedUrl.splice(insertPoint, 0, fitted);
      ApiUtil.editUserPhoto(window.CURRENT_USER_ID, {image_url: splittedUrl.join('/')});
    },

    render: function() {
      return(
        <button className="btn upload-button" onClick={this.upload}>
          Change your Profile Picture
        </button>
      );
    }
  });

}(this));
