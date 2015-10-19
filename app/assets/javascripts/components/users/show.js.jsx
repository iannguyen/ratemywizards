(function(root) {
  'use strict';

  root.UserShow = React.createClass({
    getStateFromStore: function() {
      var user  = UserStore.find(parseInt(this.props.params.professorId));
      return { user: user, reviews: user.reviews };
    },

    getInitialState: function() {
      return {user: {}, reviews: []};
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

    render: function() {
      var user = this.state.user;
      return(
        <div className="user-show">
          <div className="user-bio">

            <img className="user-pic" src={user.image_url}></img>
            <h1>{user.username}</h1>
            <h2>Total Reviews: {this.state.reviews.length}</h2>

          </div>
          <ReviewList reviews={this.state.reviews}/>
        </div>
      );
    }
  });

}(this));
