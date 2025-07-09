import Options from "./Options"
import { Questionnaire } from "../Data/Quest"
import { useState } from "react"
export default function Page(){
    const answersOBJ={
        fidgeting:null,
        pacing:null,
        posture:1,
        steps:null,
        hydration:null,
        focus:null
    }
    const [answers,setAnswers]=useState(answersOBJ);

    return(
        <>
        <Options question={Questionnaire[0].questions}
         title={Questionnaire[0].questionnaire} Uanswers={answers} UsetAnswers={setAnswers}/>
        
        </>
    )
}