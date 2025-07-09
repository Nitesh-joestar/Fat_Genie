import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./Css/App.css";
import Buttons from './Components/Button'
import Cards from './Components/Cards'
import Options from './Components/Options';
import { Questionnaire } from './Data/Quest';

function App() {

  return (
    <div class="accent-purple-400 bg-stone-300">
    {Questionnaire.map(q=>
    <>

      <Options question={q.questions} title={q.questionnaire}/>
      <br/>
      </>
    )}

        </div>
  )
}

export default App
