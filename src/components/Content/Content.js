import React, { Component } from "react";
import "../../styles/content.scss";
export default class Content extends Component {
  render() {
    return (
      <div class="content">
        {this.props.getCharacters.map((character) => (
          <div class="card mb-5" key={character.id}>
            <img src={character.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{character.name}</h5>
              <p class="card-text">{character.gender}</p>
              <p class="card-text">{character.status}</p>
            </div>{" "}
          </div>
        ))}
      </div>
    );
  }
}
