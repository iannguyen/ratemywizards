(function(root) {
  'use strict';

  var toggleStatus;
  var status;

  root.NavBar = React.createClass ({
    getStatus: function () {
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
              <button type="button" className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#collapse-menu"
                      aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="collapse-menu">
              <ul className="nav navbar-nav pull-right">
                <li><a href='#' onClick={toggleStatus}>{status}</a></li>
              </ul>
            </div>

          </div>
          </nav>
      );
    }
  });

$(document)
  .ready(function () {
    React.render(
      <NavBar/>,
      document.getElementById('navbar')
    );
  });

}(this));
