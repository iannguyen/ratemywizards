(function(root) {
  'use strict';

  root.Main = React.createClass({
    render: function() {
      return(
        <div id="main" className="">
          <SearchBar />
          <HouseIndex />
        </div>
      );
    }
  });

}(this));
