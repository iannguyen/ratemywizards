(function(root) {
  'use strict';

  root.UserShow = React.createClass({
    getStateFromStore: function() {
      var user = UserStore.find(parseInt(this.props.params.userId));
      return { user: user };
    },

    getInitialState: function() {
      return {user: {}};
    },

    _onChange: function() {
      this.setState(this.getStateFromStore());
    },

    componentDidMount: function() {
      UserStore.addUserChangeListener(this._onChange);
      ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
    },

    componentWillUnmount: function() {
      UserStore.removeUserChangeListener(this._onChange);
    },

    checkUserImage: function() {
      if (this.state.user.image_url === null) {
        return ("http://res.cloudinary.com/dms46o1eu/image/upload/v1445156629/Sorting_Hat_mihhnq.jpg");
      } else {
        return this.state.user.image_url;
      }
    },

    render: function() {
      if (this.state.user.reviews === undefined) { return <div></div>; }
      return(
        <div className="user-show">
          <div className="user-bio">

            <img className="user-pic" src={this.checkUserImage()}></img>

            <h1>{this.state.user.username}</h1>

            {window.CURRENT_USER_ID === this.state.user.id ? <CLWUser/> : <div></div> }

              <br/>

            <h2>Total Reviews: {this.state.user.reviews.length}</h2>

          </div>

          <ReviewList reviews={this.state.user.reviews}/>
        </div>
      );
    }
  });

}(this));
