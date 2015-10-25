(function(root) {
  'use strict';

  root.HouseDetail = React.createClass({
    getStatefromStore: function() {
      var house  = HouseStore.find(parseInt(this.props.params.houseId));
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

    houseRatings: function() {
      var that = this;
      var average = {
        overall: 0,
        count: this.state.house.professors.length,
        highest: null,
        highestRated: null
      };
      var professors = this.state.house.professors;
      professors.forEach(function(prof) {
        var profAverage = that.professorAverage(prof);
        average.overall += profAverage;
        if (average.highest === null || average.highest < profAverage) {
          average.highest = profAverage;
          average.highestRated = prof;
        }
      });
      average.overall = Math.round(average.overall * 10/ professors.length) /10;
      return average;
    },

    professorAverage: function(prof) {
      var average = 0;
      prof.reviews.forEach(function(review) {
        average += review.ability;
        average += review.easiness;
        average += review.helpfulness;
      });
      average = Math.round((average / prof.reviews.length) / 10 * 3);
      return average;
    },

    render: function() {
      if (this.state.house === undefined) { return <div></div>; }
      var ratings = this.houseRatings();
      return(
        <div id="house-detail" className="animated fadeInDown">
          <div className={this.state.house.name.toLowerCase() + " house-decoration"}>
            <div className="left">
              <ul>
                <li>Total Wizards:  {ratings.count}</li>
                <li>House Rating:  {ratings.overall}</li>
              </ul>
            </div>
            <div className="right">
              <ul>
                <li>Higest Rated:</li>
                <li className="highest-rated"><a href={"/#/professors/"  + ratings.highestRated.id}>{ratings.highestRated.name}</a></li>
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
