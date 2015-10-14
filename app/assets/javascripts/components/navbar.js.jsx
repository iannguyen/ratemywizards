(function(root) {
  'use strict';

  var toggleStatus;
  var status;

  root.NavBar = React.createClass ({
    getStatus: function() {
      if (window.CURRENT_USER_ID === undefined) {
        status = 'Sign In';
        toggleStatus = ApiUtil.signIn;
      } else {
        status = 'Sign Out';
        toggleStatus = ApiUtil.signOut;
      }
    },
    render: function() {
      this.getStatus();
      return (
        <nav className="navbar navbar">
          <div className="container-fluid">

            <div className="navbar-header">
              <button aria-expanded="false" className="navbar-toggle collapsed" data-target="#collapse-menu" data-toggle="collapse" type="button">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="collapse-menu">
              <ul className="nav navbar-nav pull-right">
                <li>
                  <a href='#' onClick={toggleStatus}>{status}</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      );
    }
  });

  $(document)
    .ready(function() {
      React.render(<NavBar/>, document.getElementById('navbar'));
    });

}(this));
