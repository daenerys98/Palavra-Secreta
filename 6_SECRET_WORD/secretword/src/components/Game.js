import "./Game.css"
import {useState, useRef} from "react"

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses, 
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };
  return (
    <div>
      <p className="game">
        <span>Pontuação:{score}</span> {/* <span> agrupar e/ou delimitar elementos a nível de linha */}
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) => ( // Buscar a letra 
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">  {/* Se a letra for acertada  */}
            {letter} { /* Mostra a letra = {letter} */}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="letter"
          maxLength="1"
          required
          onChange ={(e) => setLetter(e.target.value)}
          value={letter}
          ref={letterInputRef}
          />
          <button>Jogar</button>
        </form>
      </div>
      <div clasName="wrongLettersContainer">
        <p>Letras já útilizadas</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter},</span>
        ))}
      </div>
    </div>
  );
};

export default Game;