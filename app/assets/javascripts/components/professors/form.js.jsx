(function(root) {
  'use strict';

  root.ProfessorForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ReactRouter.History],

    defaultAttributes: {
      name: "",
      description: "",
      house: "",
    },

    getInitialState: function() {
      return this.defaultAttributes;
    },

    createProfessor: function(e) {
      e.preventDefault();
    },

    render: function() {
      return(
        <div className="professor-create">
          <div className="form-contents">

            <h3>Add a Wizard</h3>

            <form className="professor-form">

              <label htmlFor="professor-name">
                What is this Wizard's name?
                <input type="text"
                       id="professor-name"
                       valueLink={this.linkState("name")}>
                </input>
              </label>

              <label htmlFor="professor-description">
                <textarea className="professor-description" placeholder="Tell us about this professor..."
                valueLink={this.linkState("description")}></textarea>
              </label>

              <label htmlFor="professor-house">
                Which House does thy wizard preside over?
                <select id="house" name="house" valueLink={this.linkState("house")}>
                  <option value="1">Gryffindoor</option>
                  <option value="2">Ravenclaw</option>
                  <option value="3">Hufflepuff</option>
                  <option value="4">Slytherin</option>
                </select>
              </label>
            </form>

          </div>

          <button></button>

        </div>
      );
    }
  });

}(this));
