import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Header/header-menu.scss'

export default class HeaderMenu extends Component {
    render() {
        return (
            <div className="menu">
                <div class="links">
                <Link to="/" className="link">Home</Link>
                </div>
                <div class="links">
                <Link to="/episodes" className="link">Episodes</Link>
                </div>
                <div class="links">
                <Link to="/about" className="link">About Me</Link>
                </div>
            </div>
        )
    }
}
