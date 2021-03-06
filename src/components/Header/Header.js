import React, { Component } from "react";
import Logo from "./Logo";
import HeaderCenter from "./HeaderCenter";
import SocialMedia from "./SocialMedia";
import HeaderMenu from './HeaderMenu';
import "../../styles/Header/header.scss";
export default class Header extends Component {
  render() {
    return (
      <>
      <div class="row">
        <div class="col-4">
          <Logo></Logo>
        </div>
        <div class="col-4">
          <HeaderCenter></HeaderCenter>
        </div>
        <div class="col-4">
          <SocialMedia></SocialMedia>
        </div>
        </div>
      <div className="row">
        <div className="menu"><HeaderMenu></HeaderMenu></div>
      </div>
      </>
        
        
    );
  }
}
