(function(root) {
  'use strict';

  root.ProfessorForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    defaultAttributes: {
      name: "",
      description: "",
      house_id: null,
    },

    getInitialState: function() {
      return this.defaultAttributes;
    },

    createProfessor: function(e) {
      e.preventDefault();
      var that = this;
      var prof = {};
      Object.keys(this.state).forEach(function(key) {
        if (key === "house_id") {
          prof[key] = parseInt(this.state[key]);
        } else {
          prof[key] = this.state[key];
        }
      }.bind(this));
      ApiUtil.createProfessor(prof, function(id) {
        that.history.pushState(null, "/professors/" + id);
      });
    },

    render: function() {
      return(
        <div className="professor-create">
          <div className="form-contents">

            <h3>Add a Wizard</h3>

            <br/>
            <br/>

            <form className="professor-form" onSubmit={this.createProfessor}>

              <label htmlFor="professor-name">
                What is this Wizard's name?
                <br/>
                <br/>
                <input type="text"
                       id="professor-name"
                       valueLink={this.linkState("name")}>
                </input>
              </label>

              <br/>
              <br/>

              <label htmlFor="professor-house">
                Which House does thy wizard preside over?
                <br/>
                <select id="house_id" name="house_id" valueLink={this.linkState("house_id")}>
                  <option selected disabled hidden value=''></option>
                  <option value="1">Gryffindor</option>
                  <option value="2">Ravenclaw</option>
                  <option value="3">Hufflepuff</option>
                  <option value="4">Slytherin</option>
                </select>
              </label>

              <br/>
              <br/>

              <label className="professor-description" htmlFor="professor-description">
                <textarea className="professor-description" placeholder="Tell us about this professor..."
                valueLink={this.linkState("description")}></textarea>
              </label>

              <br/>
              <br/>

              <button className="btn">Summon {this.state.name}!</button>

            </form>

          </div>

          <br/>


        </div>
      );
    }
  });

}(this));
