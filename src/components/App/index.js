import React, { Component } from "react";
import "../../styles/index.scss";
import Header from "../Header/Header";
import Content from '../Content/Content';
import Filter from '../Content/Filter/Filter';
import Footer from '../Footer/index'
export default class index extends Component {
  state = {
    characterUrl: "https://rickandmortyapi.com/api/character",
    charactersResults:[],
    characterInfo:[],
  };
  componentDidMount(){
    this.getCharacters();
  }
  getCharacters=()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then(response=>response.json())
    .then(data=>this.setState({charactersResults:data.results}))
    .then(data=>this.setState({characterInfo:data.info}))
    .catch(err=>console.log(err));
  }
  render() {
    return (
      <div class="body">
         {/*Part Header */}
         <div class="part-header">
         <Header></Header>
         </div>
        <div class="container">
           
             {/*Part Content */}
          <div class="row mt-5">
            <div class="col-4 mt-5">
              <Filter></Filter>
            </div>
            <div class="col-8 mt-5">
             <Content getCharacters={this.state.charactersResults}></Content>
            </div>
          </div>
           {/*Part Footer */}
            <footer><Footer></Footer></footer>
        
        </div>
      </div>
    );
  }
}
