(function(root) {
  'use strict';

  root.Link = ReactRouter.Link;

  root.HouseTab = React.createClass({
    mixins: [ReactRouter.History],

    showDetail: function() {
      var url = '/houses/' + this.props.house.id;
      this.scrollNow();
      this.history.pushState(null, '/houses/' + this.props.house.id, {});
    },

    scrollNow: function() {
        $.smoothScroll({
          scrollElement: $('div.child'),
          scrollTarget: 'div.house-tab',
          offset: -25
        });
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
