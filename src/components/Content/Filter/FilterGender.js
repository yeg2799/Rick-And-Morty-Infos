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
                type="checkbox"
                value=""
                id="female-check"
              />
              <label class="form-check-label" for="female-check">
                female
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="male-check"
              />
              <label class="form-check-label" for="male-check">
                male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="genderless-check"
              />
              <label class="form-check-label" for="genderless-check">
                genderless
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="unknown-check"
              />
              <label class="form-check-label" for="unknown-check" >
                unknown
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
