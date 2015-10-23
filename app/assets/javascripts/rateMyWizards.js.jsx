(function() {
  'use strict';
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

  var App = React.createClass ({
    render: function() {
      return (
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
          <div id='app'>
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="houses/:houseId" components={{main: Main, house: HouseDetail}}/>
      <Route path="professors/new" component={ProfessorForm} />
      <Route path="professors/:professorId" component={ProfessorShow}/>
      <Route path="professors/:professorId/new" component={ReviewForm}/>
      <Route path="users/:userId" component={UserShow} />
      <Route path="reviews/:reviewId/edit" component={EditReviewForm} />
    </Route>
  );

  $(document)
    .ready(function() {
      var root = document.getElementById('root');
      if (root) {
        React.render(
          <Router>{routes}</Router>,
          document.getElementById('root'));
      }
    });
}());
