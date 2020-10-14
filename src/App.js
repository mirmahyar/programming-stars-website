import React, { useState } from 'react';
import Guide from "./Guide"
import './App.css';
import javascript from "./javascript.png"; import python from "./python.png"
import go from "./go.png"; import kotlin from "./kotlin.png"
import Particles from 'react-particles-js';
import Modal from "react-modal"


function App() {


  const [modalIsOpen, SetModalIsOpen] = useState(false)



  return (
    <React.Fragment>


      <button onClick={() => SetModalIsOpen(true)}>open modal</button>
      <Modal isOpen={modalIsOpen}>
        <h1> HEY HEY HEY </h1>
        <button onClick={() => SetModalIsOpen(false)}>Close</button>
      </Modal>





      <Guide />
      <div className="images">
        <button onClick={() => SetModalIsOpen(true)}>
          <img id="python" className="img" src={python} alt="Python" />
        </button>
        <button onClick={() => SetModalIsOpen(true)}>
          <img id="go" className="img" src={go} alt="Golang" />
        </button>
        <button onClick={() => SetModalIsOpen(true)}>
          <img id="kotlin" className="img" src={kotlin} alt="Kotlin" />
        </button>
        <button onClick={() => SetModalIsOpen(true)}>
          <img id="javascript" className="img" src={javascript} alt="javascript" />
        </button>
      </div>

      <Particles />

    </React.Fragment>


  )

}

export default App;
