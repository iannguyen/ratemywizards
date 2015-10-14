var root = document.getElementById('root');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass ({
  render: function() {
    return (
      <div id='app'>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route component={App} path="/"></Route>
);

$(document)
  .ready(function() {
    if (root) {
      React.render(<Router>{routes}</Router>, root);
    }
  });
