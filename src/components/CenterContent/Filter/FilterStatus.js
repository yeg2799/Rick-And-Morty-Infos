import React, { Component } from "react";

export default class FilterStatus extends Component {
  render() {
    return (
      <div class="select-status mt-5">
        <label>Status</label>
        <select class="form-select" name="currentStatus" onChange={this.props.onHandleChange}>
          <option selected>Select Status</option>
          <option value="alive">alive</option>
          <option value="dead">dead</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
    );
  }
}
