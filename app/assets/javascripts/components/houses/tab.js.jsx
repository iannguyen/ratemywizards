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
          <img className="crest" src={this.props.house.image_url}></img>
          <p> Name: {this.props.house.name}</p>
        </div>
      );
    }
  });

}(this));
