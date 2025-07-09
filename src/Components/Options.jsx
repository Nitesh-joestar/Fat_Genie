import { stringify } from "postcss";
import "../Css/Question.css";
import SubmitButton from "./SubmitButton";
export default function Options({ question, title, Uanswers,UsetAnswers}) {
  return (
    <div>
      <h3>{title}</h3>
      {question.map((q) => (
        <div key={q.id}>
          {q.question}
          <br />
          <form>
            {q.options.map((e) => (
              <div key={e.id}>
                <input
                  id={e.id}
                  type="radio"
                  name={q.statype}
                  value={e.value}
                  onChange={()=>
                    UsetAnswers(prev=>({
                      ...prev,
                      [q.statype]:[e.value]
                    })

                    )}
                />
                <label key={e.id}>
                  <span></span>
                  {e.label}
                </label>
                <br />
              </div>
            ))}
          </form>
        </div>
      ))}
      <SubmitButton answers={Uanswers}/>

    </div>
  );
}
