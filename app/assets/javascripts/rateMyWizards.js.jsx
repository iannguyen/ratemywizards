$(document)
  .ready(function() {
    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;

    var root = document.getElementById('root');

    var App = React.createClass ({
      render: function() {
        return (
          <div id='app'>
            <NavBar />
            {this.props.children}
          </div>
        );
      }
    });

    var routes = (
      <Route component={App} path="/"></Route>
    );

    React.render(<Router>{routes}</Router>, root);
  });
