import React, { useState } from 'react';
import Guide from "./COMPONENTS/Guide"
import './CSS/App.css'; import './CSS/Navbar.css'; import "./CSS/Content.css"
import javascript from "./PICTURES/javascript.png"; import python from "./PICTURES/python.png";
import csharp from "./PICTURES/csharp.png"
import go from "./PICTURES/go.png"; import kotlin from "./PICTURES/kotlin.png"; import java from "./PICTURES/java.png"
import Particles from 'react-particles-js';
import Modal from "react-modal"
import Footer from "./COMPONENTS/Footer"
import Navbar from './COMPONENTS/Navbar'
import Content from './COMPONENTS/Content';


function App() {

  const [modalIsOpenPython, SetModalIsOpenPython] = useState(false)
  const [modalIsOpenJava, SetModalIsOpenJava] = useState(false)
  const [modalIsOpenCsharp, SetModalIsOpenCsharp] = useState(false)
  const [modalIsOpenGo, SetModalIsOpenGo] = useState(false)
  const [modalIsOpenKotlin, SetModalIsOpenKotlin] = useState(false)
  const [modalIsOpenJavascript, SetModalIsOpenJavascript] = useState(false)


  return (
    <React.Fragment>

      <Navbar />
      <Guide />
      <div className="images" id="about">

        <a href="#" onClick={() => SetModalIsOpenPython(true)}>
          <img id="python" className="img" src={python} alt="Python" />
        </a>
        <div >
          <Modal isOpen={modalIsOpenPython} className="modal">
            <h1 className="modal-title">Python</h1>
            <p > <strong> Python is a real star in the programming languages world ! Its popularity has
            increased overwhelmingly during the last decade.
            It is considered as one of the best programming languages for beginners who want to start learning programming
            You can do many things with python. From machine learning, to data science, to web backend development,
            this language wont disappoint you !</strong>
            </p>
            <button className="ModalCloseButton" onClick={() => SetModalIsOpenPython(false)}> close </button>
          </Modal>
        </div>

        <a href="#" onClick={() => SetModalIsOpenJava(true)}>
          <img id="java" className="img" src={java} alt="java" />
        </a>
        <Modal isOpen={modalIsOpenJava} className="modal">
          <h1 className="modal-title">Java</h1>
          <p>Java is one of the classics ! And one of those classics which is here to stay ! Java is considered as
          one of the safest programming languages to use in large scale and industrial projects. Many large corporations
          such as banks rely on java code today. You can write desktop applications, web backend applications and even
          mobile applications with this strong language.
          </p>
          <button className="ModalCloseButton" onClick={() => SetModalIsOpenJava(false)}> close </button>
        </Modal>

        <a href="#" onClick={() => SetModalIsOpenGo(true)}>
          <img id="go" className="img" src={go} alt="Golang" />
        </a>
        <Modal isOpen={modalIsOpenGo} className="modal">
          <h1 className="modal-title">Go</h1>
          <p>Go programming language ( a.k.a GOLANG ) is one of the newcomers in teh programming world !
          But dont be fooled with its young age, it is one of the fastest growing programming languages out there !
          There are many reasons for its popularity, but isn't it enough to know that go is a product of GOOGLE?
          It was designed by a team of expert google programmers.
          Go can be used in many areas. From system programming, to backend development. Some people consider this langaueg
          to be the future language of servers ! Here, we don't judge this quote though !
          </p>
          <button className="ModalCloseButton" onClick={() => SetModalIsOpenGo(false)}> close </button>
        </Modal>



        <a href="#" onClick={() => SetModalIsOpenKotlin(true)}>
          <img id="kotlin" className="img" src={kotlin} alt="Kotlin" />
        </a>
        <Modal isOpen={modalIsOpenKotlin} className="modal">
          <h1 className="modal-title">Kotlin</h1>
          <p>Kotlin is one of the newest languages in the programming world! It is a product of JetBrains
          company which is known to make great IDEs for many languages ! Kotlin is currently used to
          build android app and many people anticipate that it will eventually replace java in the android world.
          </p>
          <button className="ModalCloseButton" onClick={() => SetModalIsOpenKotlin(false)}> close </button>
        </Modal>



        <a href="#" onClick={() => SetModalIsOpenJavascript(true)}>
          <img id="javascript" className="img" src={javascript} alt="javascript" />
        </a>
        <Modal isOpen={modalIsOpenJavascript} className="modal">
          <h1 className="modal-title">Javascript</h1>
          <p>Javascript is considered as the king of programming languages ! And who deserves this title except javascript?
          Javascript's popularity has exploded during the last decade ! It was originally designed to work in browsers, in the
          client side only. And to this day, this is the only language that browsers understand. But in 2009, a very
          talented programmer, created Node.js, which is a runtime environment to execute javascript code outside browsers
          also ! This incident made javascript very popular even for server and backend programming !
          Nowadays, you can do practically everything with javascript ! Frontend, backend, mobile, desktop ! The opportunities
          are infinite !
          </p>
          <button className="ModalCloseButton" onClick={() => SetModalIsOpenJavascript(false)}> close </button>
        </Modal>

        <a href="#" onClick={() => SetModalIsOpenCsharp(true)}>
          <img id="csharp" className="img" src={csharp} alt="csharp" />
        </a>
        <Modal isOpen={modalIsOpenCsharp} className="modal">
          <h1 className="modal-title">Csharp</h1>
          <p>C sharp is one of the old stars in the programming languages universe, which has regained popularity recently.
          Microsoft maintains this classic language, so you can be sure that it is going to stay for long !
          With C sharp you can create windows applications and also you can program servers for backend development.
          </p>
          <button className="ModalCloseButton" onClick={() => SetModalIsOpenCsharp(false)}> close </button>
        </Modal>



      </div>


      <Particles />
      <Content />

      <Footer />


    </React.Fragment>


  )

}

export default App;
