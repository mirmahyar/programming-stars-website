import React, { useState } from 'react';
import Guide from "./Guide"
import './App.css';
import javascript from "./javascript.png"; import python from "./python.png";
import csharp from "./csharp.png"
import go from "./go.png"; import kotlin from "./kotlin.png"; import java from "./java.png"
import Particles from 'react-particles-js';
import Modal from "react-modal"
import Footer from "./Footer"


function App() {

  const [modalIsOpen, SetModalIsOpen] = useState(false)
  const [modalIsOpenPython, SetModalIsOpenPython] = useState(false)
  const [modalIsOpenJava, SetModalIsOpenJava] = useState(false)
  const [modalIsOpenCsharp, SetModalIsOpenCsharp] = useState(false)
  const [modalIsOpenGo, SetModalIsOpenGo] = useState(false)




  return (
    <React.Fragment>





      <Modal isOpen={modalIsOpen}>
        <h1> HEY HEY HEY </h1>
        <button onClick={() => SetModalIsOpen(false)}>Close</button>
      </Modal>





      <Guide />
      <div className="images">

        <a href="#" onClick={() => SetModalIsOpenPython(true)}>
          <img id="python" className="img" src={python} alt="Python" />
        </a>
        <div >
          <Modal isOpen={modalIsOpenPython} className="pythonmodal">
            <h1>Python</h1>
            <button onClick={() => SetModalIsOpenPython(false)}> close </button>
          </Modal>
        </div>

        <a href="#" onClick={() => SetModalIsOpenJava(true)}>
          <img id="java" className="img" src={java} alt="java" />
        </a>
        <Modal isOpen={modalIsOpenJava} style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#0a0a0a'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#e3da96',

            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}>
          <h1>Java</h1>
          <button onClick={() => SetModalIsOpenJava(false)}> close </button>
        </Modal>

        <a href="#" onClick={() => SetModalIsOpenGo(true)}>
          <img id="go" className="img" src={go} alt="Golang" />
        </a>
        <Modal isOpen={modalIsOpenGo}>
          <h1>Go</h1>
          <button onClick={() => SetModalIsOpenGo(false)}> close </button>
        </Modal>

        <a href="#" onClick={() => SetModalIsOpen(true)}>
          <img id="kotlin" className="img" src={kotlin} alt="Kotlin" />
        </a>
        <a href="#" onClick={() => SetModalIsOpen(true)}>
          <img id="javascript" className="img" src={javascript} alt="javascript" />
        </a>

        <a href="#" onClick={() => SetModalIsOpenCsharp(true)}>
          <img id="csharp" className="img" src={csharp} alt="csharp" />
        </a>
        <Modal isOpen={modalIsOpenCsharp}>
          <h1>Csharp</h1>
          <button onClick={() => SetModalIsOpenCsharp(false)}> close </button>
        </Modal>

      </div>

      <Particles />

      <Footer />

    </React.Fragment>


  )

}

export default App;
