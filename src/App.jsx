import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./Css/App.css";
import Buttons from './Components/Button'
import Cards from './Components/Cards'
import Options from './Components/Options';
import { Questionnaire } from './Data/Quest';
import React from 'react';

function App() {

  return (
    <div>
    {Questionnaire.map(q=>
    <React.Fragment key={q.key}>

      <Options question={q.questions} title={q.questionnaire}/>
      <br/>
      </React.Fragment>
    )}

        </div>
  )
}

export default App
