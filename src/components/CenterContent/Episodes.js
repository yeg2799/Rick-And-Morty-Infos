import React, { Component } from "react";
import "../../styles/episodes.scss";
export default class Episodes extends Component {
 
  handleSubmit = (e) => {
    
    let url;
    if(e.target.value==="next"){
      url=this.props.episodeInfo.next;
    }
    else if (e.target.value==="prev") {
      url=this.props.episodeInfo.prev;
    }
    else{
      url="";
    } 
    this.props.getAllEpisodes(url);
    this.props.getEpisodesInfo(url);
  };
  render() {
    return (
      <>
        <div className="episodes">
          <h1>Episodes</h1>
          {this.props.episodes.map((episode) => (
            <div class="card mt-5 cardEpisode">
              <p>{episode.id}</p>
              <p>{episode.name}</p>
              <p>{episode.air_date}</p>
             <a href="https://www.netflix.com/title/80014749" class="watch btn btn-success" target="_blank" rel="noreferrer">Watch Rick And Morty</a>
            </div>
          ))}
          <div class="navigation mt-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <button
                    class="page-link"
                    onClick={this.handleSubmit}
                    value="prev"
                  >
                    Prev
                  </button>
                </li>
                <li class="page-item">
                  <button
                    class="page-link"
                    onClick={this.handleSubmit}
                    value="next"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
