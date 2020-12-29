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
   
  handleSubmit=(e)=>{
    let name=this.state.currentName;
    let gender=this.state.currentGender;
    let status=this.state.currentStatus
    
    
      this.props.filter(name,gender,status);
    
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
          <FilterButton  handle={this.handleSubmit}></FilterButton>
        </form>
      </div>
      </div>
      
     
    );
  }
}
