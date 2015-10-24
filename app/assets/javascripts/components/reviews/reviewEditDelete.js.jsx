(function(root) {
  'use strict';

  root.EditAndDelete = React.createClass({
    mixin: [ReactRouter.History],

    editReview: function(e) {
      e.preventDefault();
      window.location = "/#/reviews/" + this.props.review.id + "/edit";
    },

    deleteReview: function(id) {
      ApiUtil.deleteReview(this.props.review.id);
    },

    render: function() {
      return(
        <div className="edit-and-delete">
          <button onClick={this.editReview} className="animated swing edit-review">Edit Review</button>
          <button onClick={this.deleteReview} className="animated swing delete-review">Delete</button>
        </div>
      );
    }
  });

}(this));
