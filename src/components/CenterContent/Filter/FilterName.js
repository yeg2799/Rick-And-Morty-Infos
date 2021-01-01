import React, { Component } from 'react'

export default class FilterName extends Component {
    render() {
        return (
            <div>
                {/*Part Name */}
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              name="currentName"
              id="name"
              placeholder="Enter Name"
              onChange={this.props.onHandleChange}
            />
          </div>
            </div>
        )
    }
}
