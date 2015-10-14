(function(root) {
  'use strict';

  root.HouseDetail = React.createClass({
    render: function() {
      return (
        <div>
          {this.props.house.name}
        </div>
      );
    }
  });

}(this));
