import "../Css/Question.css";
import { Questionnaire } from "../Data/Quest";


export default function Options({question,title}){

    return(
        <div>
          <h3>{title}</h3>
        {question.map(q=>
          <>
          {q.question}
          <br/>
          <form class="radio-form">
            {q.options.map(e=>
          <>
	        <input id={e.id} type="radio" name={q.statype} value={e.value}/>
	        <label><span></span>{e.label}</label>  
          <br/>        
          </>
          )}
              </form>
          </>
        )}

     
      
            </div>

    );



}