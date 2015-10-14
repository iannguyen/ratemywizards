(function(root) {
  'use strict';

  root.HouseTab = React.createClass({
    mixins: [ReactRouter.History],

    showDetail: function() {
      this.history.pushState(null, '/houses/' + this.props.house.id, {});
    },

    render: function() {
      return (
        <div className="house-tab" onClick={this.showDetail}>
          <p> Name: {this.props.house.name}</p>
          <p> ID: {this.props.house.id}</p>
        </div>
      );
    }
  });

}(this));
