type buttonprops={
    label:string,
    onclick():void
}
export default function Button({ label, onclick }:buttonprops){
    return(
        <div className="mt-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-m px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-center">
            <button onClick={onclick}>{label}</button>
        </div>
    )
}