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
    url:"https://rickandmortyapi.com/api/character?page=",
    currentName:"",
    currentGender:"",
    currentStatus:"",
    boolFilter:false
  };
  onChangeHandle=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  componentDidMount(){
    this.getCharacters(this.state.url);
    this.getCharacterInfo(this.state.url);
    this.getFilterCharacters();
  }
  //Get Character
  getCharacters=(url)=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({charactersResults:data.results}))
    .catch(err=>console.log(err));
  }
  //Character info (page vs)
  getCharacterInfo=(url)=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({characterInfo:data.info}))
    // .then(data=>console.log(data.info.next))
    .catch(err=>console.log(err));
  }
  //Filter Characters
  getFilterCharacters=(name,gender,status)=>{
    let url="https://rickandmortyapi.com/api/character/";
    if(name || gender || status){
      this.setState({boolFilter:true});
     url+= `?name=${name}&gender=${gender}&status=${status}`;
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({filterCharacters:data.results}))
    // .then(data=>console.log(data.results))
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
          <div class="row mt-5">
            <div class="col-4 filter mt-5">
              <Filter filter={this.getFilterCharacters} currentName={this.state.currentName} currentGender={this.state.currentGender} currentStatus={this.state.currentStatus} onChangeHandle={this.onChangeHandle}></Filter>
            </div>
            <div class="col-8 mt-5">  
             <Content boolFilter={this.state.boolFilter} getCharacters={this.state.charactersResults} filterCharacters={this.state.filterCharacters} info={this.state.characterInfo} characters={this.getCharacters} url={this.state.url} infos={this.getCharacterInfo}></Content>
            
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
