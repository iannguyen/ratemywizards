(function(root) {
  'use strict';

  var toggleStatus;
  var status;
  var welcome;
  var back;

  root.NavBar = React.createClass ({
    mixins: [ReactRouter.History],

    getStatus: function() {
      if (window.CURRENT_USER_ID === undefined) {
        status = 'Sign In';
        toggleStatus = ApiUtil.signIn;
        welcome = "Create an account, squib!";
      } else {
        status = 'Sign Out';
        toggleStatus = ApiUtil.signOut;
        welcome = "You're a wizard,  " + window.CURRENT_USER + " ! ";
      }
    },

    playMusic: function () {
      var tune = new Audio();

      var myAudio = document.getElementById("hpmusic");
      myAudio.volume = 0.3;
    },

    componentDidMount: function() {
      var myAudio = document.getElementById("hpmusic");
      myAudio.volume = 0.3;
      myAudio.autoplay = true;
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
                      <a className="navbar-brand" href="/" onClick={this.goHome}>RateMyWizards</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul className="nav navbar-nav pull-right">
                        <li>
                        </li>
                        <li>
                          <a href="#" className="audio"><audio id="hpmusic" controls>
                            <source  src="http://res.cloudinary.com/dms46o1eu/video/upload/v1445058621/hptheme_ac7dzk.mp3">
                            </source>
                          </audio>
                        </a>
                        </li>
                        <li>
                            <a href="/users/new">{welcome}</a>
                        </li>
                        <li>
                            <a href="" onClick={toggleStatus}>{status}</a>
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
