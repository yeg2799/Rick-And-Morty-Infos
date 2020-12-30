import React, { Component } from 'react'
export default class FilterButton extends Component {
    handleSubmit=(e)=>{
        let name=this.props.currentName;
        let gender=this.props.currentGender;
        let status=this.props.currentStatus;
        this.props.filter(name,gender,status);
        console.log(name+" "+gender+" "+status)
      }

    render() {
        return (
            <div class="mt-5 buttonFilter">
                <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Filter</button>
            </div>
        )
    }
}
