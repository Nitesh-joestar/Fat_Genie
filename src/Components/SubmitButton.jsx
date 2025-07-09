export default function SubmitButton({answers}){
    function handleClick(){
        localStorage.setItem("answers",JSON.stringify(answers))
    }
    return(
        <>
        <button onClick={handleClick}>
            Submit pleease
    

        </button>
        </>
    )
}