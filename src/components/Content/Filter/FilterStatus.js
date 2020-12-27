import React, { Component } from "react";

export default class FilterStatus extends Component {
  render() {
    return (
      <div class="select-status mt-5">
        <label>Status</label>
        <select class="form-select" >
          <option selected>Select Status</option>
          <option value="1">alive</option>
          <option value="2">dead</option>
          <option value="3">unknown</option>
        </select>
      </div>
    );
  }
}
