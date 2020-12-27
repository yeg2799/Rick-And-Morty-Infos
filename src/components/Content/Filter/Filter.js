import React, { Component } from "react";
import FilterName from './FilterName'
import FilterStatus from './FilterStatus'
import FilterGender from './FilterGender';
import FilterButton from './FilterButton'
import '../../../styles/Filter/filter.scss'
export default class Filter extends Component {
  handleSubmit=(e)=>{
    console.log("Button is Click");
  }
  render() {
    return (
      <div class="filter">
        <h1>Filter</h1>
         <div class="mt-5">
        <form>
          <FilterName></FilterName>
          <FilterGender></FilterGender>
          <FilterStatus></FilterStatus>
          <FilterButton handleSubmit={this.handleSubmit}></FilterButton>
        </form>
      </div>
      </div>
      
     
    );
  }
}
