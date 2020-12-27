import React, { Component } from "react";
import '../../styles/content.scss'
export default class Content extends Component {
  render() {
    return (
      <div class="content">
        <div class="card" >
          <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Morty Smith</h5>
            <p class="card-text">
              Gender:male
            </p>
            <p class="card-text">
             Status:alive
            </p>
          </div>
          
        </div>
        
      </div>
    );
  }
}
