(function(root) {
  'use strict';

  root.HouseDetail = React.createClass({
    getStatefromStore: function() {
      var house = HouseStore.find(parseInt(this.props.params.houseId));
      return { house: house };
    },

    getInitialState: function() {
      return {};
    },

    _onChange: function() {
      this.setState(this.getStatefromStore());
    },

    showProfessor: function(id) {
      this.props.history.pushState(null, "/professors/" + id);
    },

    componentWillReceiveProps: function(newProps) {
      ApiUtil.fetchSingleHouse(parseInt(newProps.params.houseId));
    },

    componentDidMount: function() {
      HouseStore.addHouseDetailChangeListener(this._onChange);
      ApiUtil.fetchSingleHouse(parseInt(this.props.params.houseId));
    },

    componentWillUnmount: function() {
      HouseStore.removeHouseDetailChangeListener(this._onChange);
    },

    scrollNow: function() {
        $.smoothScroll({
          scrollElement: $('div.child'),
          scrollTarget: 'div.house-tab',
          offset: -25
        });
    },

    render: function() {
      if (this.state.house === undefined) { return <div></div>; }

      this.scrollNow();

      var rating = this.state.house.house_average;
      var highestRated = this.state.house.highest_rated;
      var count = this.state.house.professors.length;

      return(
        <div id="house-detail" className="animated fadeInDown">

          <div className={this.state.house.name.toLowerCase() + " house-decoration"}>

            <div className="left">
              <ul>
                <li>Total Wizards:  {count}</li>
                <li>House Rating:  {rating}</li>
              </ul>
            </div>

            <div className="right">
              <ul>
                <li>Highest Rated:</li>
                <li className="highest-rated"><a href={"/#/professors/"  + highestRated.id}>{highestRated.name}</a></li>
              </ul>
            </div>

            <h1 className="house-name">{this.state.house.name}</h1>

          </div>

          <ul id="house-detail-list" className="animated fadeInUp">
            {
              this.state.house.professors.map(function(professor) {
                return (
                  <li className="search-result">
                    <ProfessorItem key={professor.id} professor={professor} />
                  </li>
                );
              }.bind(this))
            }
          </ul>

        </div>
      );
    }
  });

}(this));
