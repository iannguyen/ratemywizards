(function() {
  'use strict';
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
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="houses/:houseId" components={{main: Main, house: HouseDetail}}/>
      <Route path="professors/:professorId" component={ProfessorShow}/>
      <Route path="professors/:professorId/new" component={ReviewForm}/>
    </Route>
  );

  $(document)
    .ready(function() {
      if (root) {
        React.render(<Router>{routes}</Router>, document.getElementById('root'));
      }
    });
}());
