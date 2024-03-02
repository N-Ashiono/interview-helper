import { useState } from "react"
import "./App.css"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function App() {
  const [isRevealed, setIsRevealed] = useState<boolean>(false)

  function handleReveal() {
    setIsRevealed(true)
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h2 className="title">Interview Helper</h2>
        </div>

        <div className="main">
          <div className="question">Why did the cat live to 100?</div>
          <div className={isRevealed ? "answer" : "hidden"}>
            Because it was a god among beings.
          </div>
          <div className="questionNav">
            <button className="arrows">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="arrows">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className="reveal" onClick={handleReveal}>
              Reveal Answer
            </button>
          </div>
        </div>

        <div className="footer">Not for commercial purpose.</div>
      </div>
    </>
  )
}

export default App
