import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
import cards from "./cards.json";
import './App.css';

class Game extends Component {
  state = {
    cards,
    score: 0,
    topscore: 0,
  }

render(){
  return (
    <div>
      <Navbar style = {{ background: "#313133", marginBottom:"5px"}}/>
      <Container>
        

      </Container>
    </div>
  )
}
}

export default App;