import React from "react";
import { Container } from '../Grid';
import './style.css';

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark custom-nav">
      <Container className="container">
        <a className="navbar-brand" href="/"><i className="fas fa-atom"></i> Zachary Rosensohn</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="/portfolio">Portfolio</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <a href="/contact" role="button" className="btn btn-warning my-2 my-sm-0">Contact Me</a>
          </ul>
        </div>
      </Container>
    </nav >
  );
}

export default Nav;
