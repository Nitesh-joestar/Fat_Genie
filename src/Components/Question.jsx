import "../Css/Question.css";


export default function Question(){

    return(
            <div class="radio-input">
            <label class="label">
                <input
                type="radio"
                id="value-1"
                name="value-radio"
                value="value-1"
                />
                <p class="text">Designer</p>
            </label>
            <label class="label">
                <input type="radio" id="value-2" name="value-radio" value="value-2" />
                <p class="text">Student</p>
            </label>
            <label class="label">
                <input type="radio" id="value-3" name="value-radio" value="value-3" />
                <p class="text">Teacher</p>
            </label>
            </div>

        

    );



}