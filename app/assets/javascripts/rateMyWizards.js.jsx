$(document).ready(function () {
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var root = document.getElementById('app');

  var App = React.createClass ({
    render: function () {
      return (
        <div id='app'>
          { this.props.children }
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>

    </Route>
  );

  React.render(
    <Router>{ routes }</Router>,
      root
  );
});
