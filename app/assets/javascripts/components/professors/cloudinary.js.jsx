(function(root) {
  'use strict';

  root.CLWProf = React.createClass({
    upload: function(e) {
      e.preventDefault();
      cloudinary.openUploadWidget({upload_preset: window.CLOUDINARY.upload_preset},
      this.updateProfPhoto);
    },

    updateProfPhoto: function(error, result, callback) {
      if(error) { return; }
      var fitted = "w_400,h_400,c_fit";
      var url = result[0].secure_url;
      var splittedUrl = url.split('/');
      var insertPoint = splittedUrl.indexOf('upload') + 1;
      splittedUrl.splice(insertPoint, 0, fitted);
      ApiUtil.editProfPhoto(this.props.professor.id, {image_url: splittedUrl.join('/')});
    },

    render: function() {
      return(
        <button className="animated infinite swing upload-button" onClick={this.upload}>
          Change this Wizard's Photo!
        </button>
      );
    }
  });

}(this));
