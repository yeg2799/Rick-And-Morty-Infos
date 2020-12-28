import React, { Component } from "react";
import "../../styles/index.scss";
import Header from "../Header/Header";
import Content from '../Content/Content';
import Filter from '../Content/Filter/Filter';
import Footer from '../Footer/index'
export default class index extends Component {
  state = {
    characterUrl: "https://rickandmortyapi.com/api/character",
    characters:[]
  };
  componentDidMount(){
    this.getCharacters();
  }
  getCharacters=()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then(response=>response.json())
    .then(data=>this.setState({characters:data.results}))
    .catch(err=>console.log(err));
  }
  render() {
    return (
      <div class="body">
       
        <div class="container">
            {/*Part Header */}
         <Header></Header>
             {/*Part Content */}
          <div class="row mt-5">
            <div class="col-4">
              <Filter></Filter>
            </div>
            <div class="col-8">
             <Content getCharacters={this.state.characters}></Content>
            </div>
          </div>
           {/*Part Footer */}
            <footer><Footer></Footer></footer>
        
        </div>
      </div>
    );
  }
}
