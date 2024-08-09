import { useState } from "react";
import "./App.css";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false); // Oyun durumu kontrolu icin

  const choices = ["rock", "paper", "scissors"];

  function handleUserChoice(choice) {
    const computerChoice = generateComputerChoice();
    const gameResult = determineWinner(choice, computerChoice);

    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(gameResult);
    updateScore(gameResult);
    setGameOver(true); // Oyun tamamlandiginda gameOver'i true yap demis olduk
  }

  function generateComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(user, computer) {
    if (user === computer) {
      return "Draw!";
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      return "You Win!";
    } else {
      return "You Lose!";
    }
  }

  function updateScore(result) {
    if (result === "You Win!") {
      setScore(score + 1);
    } else if (result === "You Lose!") {
      setScore(score - 1);
    }
  }

  function resetGame() {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setGameOver(false); // Yeniden baslamak icin gameOver'ı false yap
  }

  return (
    <>
      <div className="header">
        <img src="/img/ROCKPAPERSCISSORS..svg" alt="Rock Paper Scissors" />
        <div className="score">
          <h6>SCORE</h6>
          <p>{score}</p>
        </div>
      </div>

      {gameOver ? (
        <div className="result">
          <h2>{result}</h2>
          <div className="choice-display">
            <div className="choice">
              <p>You chose:</p>
              <img src={`/img/${userChoice}.svg`} alt={userChoice} />
            </div>
            <button onClick={resetGame} className="play-again-btn">
              Play Again
            </button>
            <div className="choice">
              <p>Computer chose:</p>
              <img src={`/img/${computerChoice}.svg`} alt={computerChoice} />
            </div>
          </div>
        </div>
      ) : (
        <div className="choices">
          <img className="triangle-img" src="/img/Path (1).svg" alt="Triangle" />
          <button id="paper" className="choice-button" onClick={() => handleUserChoice("paper")}>
            <img src="/img/paper.svg" alt="Paper" />
          </button>
          <button id="scissors" className="choice-button" onClick={() => handleUserChoice("scissors")}>
            <img src="/img/scissors.svg" alt="Scissors" />
          </button>
          <button id="rock" className="choice-button" onClick={() => handleUserChoice("rock")}>
            <img src="/img/rock.svg" alt="Rock" />
          </button>
        </div>
      )}

      <a href="#rules-container" className="footer">
        <p>RULES</p>
      </a>
      <div id="rules-container" className="rules-container">
        <div className="rules-header">
          <h2>Rules</h2>
          <a href="#" type="button">
            X
          </a>
        </div>
        <img src="/img/Group 16.svg" alt="Rules" />
      </div>
    </>
  );
}

export default App;
