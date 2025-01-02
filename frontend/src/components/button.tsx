type buttonprops={
    label:string
}
export default function Button({ label }:buttonprops){
    return(
        <div>
            <button>{label}</button>
        </div>
    )
}