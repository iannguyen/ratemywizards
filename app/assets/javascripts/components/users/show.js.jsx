(function(root) {
  'use strict';

  root.UserShow = React.createClass({
    getStateFromStore: function() {
      console.log("getting state")
      console.log(this.props.params.userId)
      var user  = UserStore.find(parseInt(this.props.params.userId));
      return { user: user };
    },

    getInitialState: function() {
      console.log("initializing")
      return {user: {}};
    },

    _onChange: function() {
      this.setState(this.getStateFromStore());
    },

    componentDidMount: function() {
      console.log("mount");
      UserStore.addUserChangeListener(this._onChange);
      ApiUtil.fetchSingleUser(parseInt(this.props.params.userId));
    },

    componentWillUnmount: function() {
      console.log("unmount");
      UserStore.removeUserChangeListener(this._onChange);
    },
    componentWillUpdate: function() {
      debugger
      console.log("updating")
    },
    componentWillReceiveProps: function() {
      console.log("receive")
    },
    componentDidReceiveProps: function() {
      console.log("received")
    },
    checkUserImage: function() {
      if (this.state.user.image_url === null) {
        return ("http://res.cloudinary.com/dms46o1eu/image/upload/v1445156629/Sorting_Hat_mihhnq.jpg");
      } else {
        return this.state.user.image_url;
      }
    },

    render: function() {
      var user = this.state.user;
      return(
        <div className="user-show">
          <div className="user-bio">

            <img className="user-pic" src={this.checkUserImage()}></img>

            <h1>{user.username}</h1>
              <br/>
            <h2>Total Reviews: {user.reviews ? user.reviews.length : 0 }</h2>
              <br/>

            {window.CURRENT_USER_ID === this.state.user.id ? <CLW/> : <div></div> }
          </div>

          <ReviewList reviews={user.reviews ? user.reviews : []}/>
        </div>
      );
    }
  });

}(this));
