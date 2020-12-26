import React, { Component } from "react";
import Logo from './Logo';
import HeaderCenter from './HeaderCenter';
import SocialMedia from './SocialMedia';
import "../../styles/Header/header.scss";
export default class Header extends Component {
  render() {
    return (
      <div class="row pt-2">
        <div class="col-4 pt-5"><Logo></Logo></div>
        <div class="col-6"><HeaderCenter></HeaderCenter></div>
        <div class="col-2"><SocialMedia></SocialMedia></div>
      </div>
     
    );
  }
}
