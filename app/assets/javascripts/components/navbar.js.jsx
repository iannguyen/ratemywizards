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
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div id="navbar-brand" className="container">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                      <a className="navbar-brand" href="/">RateMyWizards</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav pull-right">
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>
                            <a href="#" onClick={toggleStatus}>{status}</a>
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
