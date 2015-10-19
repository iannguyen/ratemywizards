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
      debugger;
      return(
        <div>{this.state.user.username}</div>
      );
    }
  });

}(this));
