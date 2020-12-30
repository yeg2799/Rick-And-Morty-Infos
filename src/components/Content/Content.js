import React, { Component } from "react";
import "../../styles/content.scss";
export default class Content extends Component {

 
  handleSubmit = (e) => {
    
    let url;
    if(e.target.value==="next"){
      url=this.props.info.next;
    }
    else if (e.target.value==="prev") {
      url=this.props.info.prev;
    }
    else{
      url="";
    } 
    this.props.characters(url);
    this.props.infos(url);
  };
  render() {
    return (
      <div class="part-content">
        <h1>Characters</h1>
        <div class="content mt-5">
          {this.props.getCharacters.map((character) => (
            <div class="card mb-5" key={character.id}>
              <img src={character.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{character.name}</h5>
                <p class="card-text">{character.gender}</p>
                <p class="card-text">{character.status}</p>
                <p class="card-text">{character.species}</p>
                <p class="card-text">{character.type}</p>
              </div>{" "}
            </div>
          ))}
        </div>

        <div class="navigation">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
              <button class="page-link" onClick={this.handleSubmit} value="prev">Prev</button>
              </li>
              <li class="page-item">
              <button class="page-link" onClick={this.handleSubmit} value="next">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
