import React from 'react';
import Img from '../Img';

function Card({ imgSrc, imgClass, imgAlt, cardTitle, cardText, gitHub, demo }) {
  return (
    <div className="card h-100">
      <Img src={imgSrc} className={imgClass} alt={imgAlt} />
      <div className="card-body border-top">
        <h5 className="card-title">{cardTitle}</h5>
        <div className="card-text">{cardText}</div>
      </div>
      <div className="card-footer">
        <span className="text-muted">
          <i className="fab fa-github" aria-hidden="true"></i>
          <a href={gitHub} target="_new"> GitHub </a>
        </span>
        {demo ?
          <span className="text-muted">
            <i className="fas fa-laptop-code" aria-hidden="true"></i>
            <a href={demo} target="_new"> Live Demo </a>
          </span> : ''}
      </div>
    </div>
  );
};

export default Card;