import React, { Component } from "react";
import "../../styles/aboutme.scss";
import { FaLinkedin, FaGithubSquare, FaFacebook } from "react-icons/fa";
import { RiInstagramFill, RiTwitterFill } from "react-icons/ri";
export default class Aboutme extends Component {
  render() {
    return (
      <div class="about-me">
        <div class="about-head">
          <div class="img">
            <img
              src="https://avatars3.githubusercontent.com/u/57830634?s=400u=a81d38bb4a08ac128a946da082de370e8223f43dv=4"
              alt=""
            ></img>
          </div>
          <div class="about">
            <h1>Yunus Emre Güzel</h1>
            <span>
              Hello guys, I am Emre and 21 years old, i am student at Selcuk
              University.
            </span>
          </div>
        </div>

        <div class="social-media">
          <span class="linkedin">
            <a
              href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin class="i"></FaLinkedin>
            </a>
          </span>
          <span class="instagram">
            <a
              href="https://www.instagram.com/emregzl27/"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramFill class="i"></RiInstagramFill>
            </a>
          </span>
          <span class="github">
            <a
              href="https://github.com/yeg2799"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare class="i"></FaGithubSquare>
            </a>
          </span>
          <span class="facebook">
            <a
              href="https://www.facebook.com/emre.guzel.3386/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook class="i"></FaFacebook>
            </a>
          </span>
          <span class="twitter">
            <a
              href="https://twitter.com/emrex99"
              target="_blank"
              rel="noreferrer"
            >
              <RiTwitterFill class="i"></RiTwitterFill>
            </a>
          </span>
        </div>
      </div>
    );
  }
}
