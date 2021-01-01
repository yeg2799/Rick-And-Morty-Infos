import React, { Component } from "react";

export default class FilterGender extends Component {
  render() {
    return (
      <div>
        <div class="gender mt-5">
          <label class="form-check-label mb-2">Gender</label>
          <div class="select-gender">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="female"
                name="currentGender"
                id="female-check"
                onChange={this.props.onHandleChange}
              />
              <label class="form-check-label" for="female-check">
                female
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="male"
                name="currentGender"
                id="male-check"
                onChange={this.props.onHandleChange}
              />
              <label class="form-check-label" for="male-check">
                male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="genderless"
                name="currentGender"
                id="genderless-check"
                onChange={this.props.onHandleChange}
              />
              <label class="form-check-label" for="genderless-check">
                genderless
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                value="unknown"
                name="currentGender"
                id="unknown-check"
                onChange={this.props.onHandleChange}
              />
              <label class="form-check-label" for="unknown-check">
                unknown
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
