import React, { Component } from "react";
import { FaFacebook,FaInstagram,FaLinkedinIn,FaGithub,FaTwitter } from "react-icons/fa";
export default class SocialMedia extends Component {
  render() {
    return (
      <div class="social pt-5">
        <div class="row">
          <div class="col-1 social-m"><a href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/" target="_blank" rel="noreferrer" class="face"><FaFacebook class="i"></FaFacebook></a></div>
          <div class="col-1 social-m"><a href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/" target="_blank" rel="noreferrer" class="insta"><FaInstagram class="i"></FaInstagram></a></div>
          <div class="col-1 social-m"><a href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/" target="_blank" rel="noreferrer" class="linkedin"><FaLinkedinIn class="i"></FaLinkedinIn></a></div>
          <div class="col-1 social-m"><a href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/" target="_blank" rel="noreferrer" class="github"><FaGithub class="i"></FaGithub></a></div>
          <div class="col-1 social-m"><a href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/" target="_blank" rel="noreferrer" class="twitter"><FaTwitter class="i"></FaTwitter></a></div>
          
        </div>
      </div>
    );
  }
}
