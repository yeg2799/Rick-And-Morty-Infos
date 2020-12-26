import React, { Component } from "react";
import "../../styles/index.scss";
import Header from "../Header/Header";
import Content from '../Content/Content';
import Filter from '../Content/Filter';
import Footer from '../Footer/index'
export default class index extends Component {
  state = {
    characterUrl: "https://rickandmortyapi.com/api/character",
  };
  render() {
    return (
      <div class="body">
        <div class="container">
          <Header></Header>
          <div class="row mt-5">
            <div class="col-4">
              <Filter></Filter>
            </div>
            <div class="col-8">
             <Content></Content>
            </div>
          </div>
          
            <footer><Footer></Footer></footer>
        
        </div>
      </div>
    );
  }
}
