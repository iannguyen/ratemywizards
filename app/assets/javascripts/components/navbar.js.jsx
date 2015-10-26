(function(root) {
  'use strict';

  root.NavBar = React.createClass ({
    mixins: [ReactRouter.History],

    links: {
      toggleStatus: "",
      status: "",
      welcome: "",
      usershow: "",
      back: ""
    },

    getInitialState: function() {
      return (this.getStatus());
    },

    getStatus: function() {
      if (window.CURRENT_USER_ID === undefined) {
        this.links.welcome = "Create an account, squib!";
        this.links.userShow = "/users/new";
        this.links.status = 'Sign In';
        this.links.toggleStatus = ApiUtil.signIn;
      } else {
        this.links.welcome = "You're a wizard,  " + window.CURRENT_USER + " ! ";
        this.links.userShow = "/#/users/" + window.CURRENT_USER_ID;
        this.links.status = 'Sign Out';
        this.links.toggleStatus = ApiUtil.signOut;
      }
      return this.links;
    },

    _onChange: function() {
      this.setState(this.getStatus());
    },

    componentDidMount: function() {
      var myAudio = document.getElementById("hpmusic");
      myAudio.volume = 0.3;
      // if (window.location.pathname === '/') {
      //   myAudio.autoplay = true;
      // }
    },

    playMusic: function () {
      var tune = new Audio();
      var myAudio = document.getElementById("hpmusic");
      myAudio.volume = 0.3;
    },

    render: function() {
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
                      <a className="navbar-brand" href="/#">
                        <img className="nav-logo" src="http://res.cloudinary.com/dms46o1eu/image/upload/v1445743616/logo_grey_tnazoe.png"></img>
                      </a>
                            <span className="site-description">
                              Rate Wizards, Like Reviews, and Create Wizards, with a flick of your wand.
                            </span>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul className="nav navbar-nav pull-right">
                        <li>
                          <a >
                          </a>
                        </li>
                        <li>
                          <a href="#" className="audio"><audio id="hpmusic" controls autoplay>
                            <source  src="http://res.cloudinary.com/dms46o1eu/video/upload/v1445058621/hptheme_ac7dzk.mp3">
                            </source>
                          </audio>
                        </a>
                        </li>


                        <li>
                            <a href={this.links.userShow}>{this.links.welcome}</a>
                        </li>
                        <li>
                            <a href="/session/new" onClick={this.links.toggleStatus}>{this.links.status}</a>
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
