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
    filterCharacters:[],
    url:"https://rickandmortyapi.com/api/character?page="
  };
  componentDidMount(){
    this.getCharacters(this.state.url);
    this.getCharacterInfo(this.state.url);
    this.getFilterCharacters();
  }
  getCharacters=(url)=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({charactersResults:data.results}))
    .catch(err=>console.log(err));
  }
  getCharacterInfo=(url)=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({characterInfo:data.info}))
    // .then(data=>console.log(data.info.next))
    .catch(err=>console.log(err));
  }
  getFilterCharacters=(name,gender,status)=>{
    let url="https://rickandmortyapi.com/api/character/?name="+name+"&gender="+gender+"&status="+status;
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({filterCharacters:data.results}))
    .catch(err=>console.error(err));
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
          <div class="row">
            <div class="col-4 filter mt-5">
              <Filter filter={this.getFilterCharacter}></Filter>
            </div>
            <div class="col-8 mt-5">  
             <Content getCharacters={this.state.charactersResults} filterCharacters={this.state.filterCharacters} info={this.state.characterInfo} characters={this.getCharacters} url={this.state.url} infos={this.getCharacterInfo}></Content>
            
            </div>
          </div>
           {/*Part Footer */}
           <div class="footer">
           <footer><Footer></Footer></footer>
           </div>
            
        
        </div>
      </div>
    );
  }
}
