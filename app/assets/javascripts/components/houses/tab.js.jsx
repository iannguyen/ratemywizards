(function(root) {
  'use strict';

  root.Link = ReactRouter.Link;

  root.HouseTab = React.createClass({
    mixins: [ReactRouter.History],

    showDetail: function() {
      window.scrollTo(0, 350);
      var url = '/houses/' + this.props.house.id;
      this.history.pushState(null, '/houses/' + this.props.house.id, {});
    },

    render: function() {
      return (
        <div className="house-tab" onClick={this.showDetail}>
          <img className="crest" src={this.props.house.image_url}></img>
        </div>
      );
    }
  });

}(this));
