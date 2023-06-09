import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import $ from 'jquery'


export default class Navbar extends Component {

  
  componentDidMount(){
  console.log($('#navbar'));

}
  render() {
    return (
      <>
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top bg_color">
          <div className="container px-5">
            <NavLink className="navbar-brand fs-1" to="/home">START REACT</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <NavLink className="nav-link" to="/portfolio" >PORTFOLIO</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" >ABOUT</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>


      </>
    )
  }
}
