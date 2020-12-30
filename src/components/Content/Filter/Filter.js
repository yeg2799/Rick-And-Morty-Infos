import React, { Component } from "react";
import FilterName from './FilterName'
import FilterStatus from './FilterStatus'
import FilterGender from './FilterGender';
import FilterButton from './FilterButton'
import '../../../styles/Filter/filter.scss'
export default class Filter extends Component {
  state={
    currentName:"",
    currentGender:"",
    currentStatus:"",
    }
  

  onChangeHandle=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <div class="filter">
        <h1>Filter</h1>
         <div class="mt-5">
        <form>
          <FilterName onHandleChange={this.onChangeHandle}></FilterName>
          <FilterGender onHandleChange={this.onChangeHandle}></FilterGender>
          <FilterStatus  onHandleChange={this.onChangeHandle}></FilterStatus>
          <FilterButton currentName={this.state.currentName} currentGender={this.state.currentGender} currentStatus={this.state.currentStatus} filter={this.props.filter}></FilterButton>
          
        </form>
      </div>
      </div>
      
     
    );
  }
}
