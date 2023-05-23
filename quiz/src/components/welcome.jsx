import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import quiz from "../img/teste.svg";
import "./welcome.css"

 const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  console.log(quizState)
  return (
    <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão para começar</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>
          Iniciar
          </button>
        <img src={quiz} alt="Inicio do quiz" />
    </div>
  );
}

export default Welcome;