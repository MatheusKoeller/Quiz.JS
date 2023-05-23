import { useContext, useEffect } from 'react'
import Welcome from './components/welcome'
import Questionario from './components/questionario';
import { QuizContext } from './context/quiz';
import GameOver from './components/GameOver';

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=> {
    dispatch({ type: "REODER_QUESTIONS"});
  },[])


  return (
    <div className='App'>
      <h1>Quiz app</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Questionario/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
