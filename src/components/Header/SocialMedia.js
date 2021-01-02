import React, { Component } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
export default class SocialMedia extends Component {
  render() {
    return (
      <div class="social mt-5">
        <div class="row">
          <div class="col-4"></div>
          <div class="col-8 social-m">
            <div class="col-2">
              <a
                href="https://www.facebook.com/emre.guzel.3386/"
                target="_blank"
                rel="noreferrer"
                class="face"
              >
                <FaFacebook class="i"></FaFacebook>
              </a>
            </div>
            <div class="col-2">
              <a
                href="https://www.instagram.com/emregzl27/"
                target="_blank"
                rel="noreferrer"
                class="insta"
              >
                <FaInstagram class="i"></FaInstagram>
              </a>
            </div>
            <div class="col-2">
              <a
                href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/"
                target="_blank"
                rel="noreferrer"
                class="linkedin"
              >
                <FaLinkedinIn class="i"></FaLinkedinIn>
              </a>
            </div>
            <div class="col-2">
              <a
                href="https://github.com/yeg2799"
                target="_blank"
                rel="noreferrer"
                class="github"
              >
                <FaGithub class="i"></FaGithub>
              </a>
            </div>

            <div class="col-2">
              <a
                href="https://twitter.com/emrex99"
                target="_blank"
                rel="noreferrer"
                class="twitter"
              >
                <FaTwitter class="i"></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
