import React, { Component } from "react";
import FilterName from './FilterName'
import FilterStatus from './FilterStatus'
import FilterGender from './FilterGender';
import FilterButton from './FilterButton'
import '../../../styles/Filter/filter.scss'
export default class Filter extends Component {
  handleSubmit=(e)=>{
    let name=this.props.currentName;
    let gender=this.props.currentGender;
    let status=this.props.currentStatus;

    this.props.filter(name,gender,status);
    console.log(name+" "+gender+" "+status)
  }
  render() {
    return (
      <div class="filter">
        <h1>Filter</h1>
         <div class="mt-5">
        <form>
          <FilterName onHandleChange={this.props.onChangeHandle}></FilterName>
          <FilterGender onHandleChange={this.props.onChangeHandle}></FilterGender>
          <FilterStatus  onHandleChange={this.props.onChangeHandle}></FilterStatus>
          <FilterButton handleSubmit={this.handleSubmit}></FilterButton>
          
        </form>
      </div>
      </div>
      
     
    );
  }
}
