import React from 'react';
import './CharCards.css';

const Characters = props => (
  <div className="card" onClick={i => props.clickEvent(i.target.src)}>
    {/* IMAGES SHOULD FIT CARDS */}
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default Characters;