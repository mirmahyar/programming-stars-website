import React from 'react';
import Guide from "./Guide"
import './App.css';
import javascript from "./javascript.png"; import python from "./python.png"
import go from "./go.png"; import kotlin from "./kotlin.png"

import Particles from 'react-particles-js';


function App() {

  return (
    <React.Fragment>

      <Guide />
      <div className="images">
        <a href="#">
          <img id="python" className="img" src={python} alt="Python" />
        </a>
        <a href="#">
          <img id="go" className="img" src={go} alt="Golang" />
        </a>
        <a href="#">
          <img id="kotlin" className="img" src={kotlin} alt="Kotlin" />
        </a>
        <a href="#">
          <img id="javascript" className="img" src={javascript} alt="javascript" />
        </a>
      </div>

      <Particles />
    </React.Fragment>


  )

}

export default App;
