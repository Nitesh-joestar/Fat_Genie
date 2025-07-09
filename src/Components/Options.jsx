import "../Css/Question.css";
import { Questionnaire } from "../Data/Quest";


export default function Options({question,title}){

    return(
        <div>
          <h3>{title}</h3>
        {question.map(q=>
          <div key={q.id}>
          {q.question}
          <br/>
          <form>
            {q.options.map(e=>
          <div key={e.id}>
	        <input id={e.id} type="radio" name={q.statype} value={e.value} 
          onChange={() => console.log(e.label)}/>
	        <label key={e.id}><span></span>{e.label}</label>  
          <br/>        
          </div>
          )}
              </form>
          </div>
        )}

     
      
            </div>

    );



}