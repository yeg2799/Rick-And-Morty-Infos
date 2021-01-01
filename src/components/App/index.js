import React, { Component } from "react";
import "../../styles/index.scss";
import Header from "../Header/Header";
import Content from '../CenterContent/Content';
import Filter from '../CenterContent/Filter/Filter';
import Footer from '../Footer/index'
import { Switch,Route } from "react-router-dom";
import Aboutme from "../CenterContent/Aboutme";
import Episodes from "../CenterContent/Episodes";
export default class index extends Component {
  state = {
    characterUrl: "https://rickandmortyapi.com/api/character",
    charactersResults:[],
    characterInfo:[],
    filterCharacters:[],
    episodes:[],
    episodeInfo:[],
    episodeCharacters:[],
    url:"https://rickandmortyapi.com/api/character?page=",
    urlEpisode:"https://rickandmortyapi.com/api/episode",
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
    this.getAllEpisodes(this.state.urlEpisode);
    this.getEpisodesInfo(this.state.urlEpisode);
    this.getEpisodesCharacters(this.state.urlEpisode);
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
  //getAllEpisodes
  getAllEpisodes=(urlEpisode)=>{
    fetch(urlEpisode)
    .then(response=>response.json())
    .then(data=>this.setState({episodes:data.results}))
    // .then(data=>console.log(data))
    .catch(err=>console.error(err));
  }
  //Epispode Info
  getEpisodesInfo=(urlEpisode)=>{
    fetch(urlEpisode)
    .then(response=>response.json())
    .then(data=>this.setState({episodeInfo:data.info}))
    .catch(err=>console.log(err));
  }
  getEpisodesCharacters=(urlEpisode)=>{
    fetch(urlEpisode)
    .then(response=>response.json())
    // .then(data=>this.setState({episodeInfo:data.result.characters}))
    .then(data=>console.log(data.results))
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
          <div class="row partCenter">
            <Switch>
              <Route exact path="/">
              <div class="col-4 filter ">
              <Filter filter={this.getFilterCharacters} currentName={this.state.currentName} currentGender={this.state.currentGender} currentStatus={this.state.currentStatus} onChangeHandle={this.onChangeHandle}></Filter>
            </div>
            <div class="col-8 ">  
             <Content boolFilter={this.state.boolFilter} getCharacters={this.state.charactersResults} filterCharacters={this.state.filterCharacters} info={this.state.characterInfo} characters={this.getCharacters} url={this.state.url} infos={this.getCharacterInfo}></Content>
            </div>
              </Route>
              <Route exact path="/episodes">
                
               <Episodes getEpisodesInfo={this.getEpisodesInfo} getAllEpisodes={this.getAllEpisodes} episodes={this.state.episodes} episodeInfo={this.state.episodeInfo} > </Episodes>
              
                
              </Route>
              <Route exact path="/about">
                
                <Aboutme></Aboutme>
              
                
              </Route>
            </Switch>
          
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
