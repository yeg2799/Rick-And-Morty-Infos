import React, { Component } from 'react'
export default class FilterButton extends Component {
    render() {
        return (
            <div class="mt-5 buttonFilter">
                <button type="button" class="btn btn-primary" onClick={this.props.handleSubmit}>Filter</button>
            </div>
        )
    }
}
