(function(root) {
  'use strict';

  root.Main = React.createClass({
    render: function() {
      return(
        <div id="main">
          <SearchBar />
          <HouseIndex />
        </div>
      );
    }
  });

}(this));
