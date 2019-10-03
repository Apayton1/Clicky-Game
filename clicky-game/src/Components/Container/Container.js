import React from 'react';
import './Container.css';
import Character from '../CharCards';

const Container = props => (

  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.characters.map((n, k) => <Character name={n} key={k} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;