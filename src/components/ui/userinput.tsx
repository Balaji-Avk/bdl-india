interface Props{
    label:string
    placeholder:string
    type ?:string
}
export default function UserInput(props:Props){
    return(
        <div className="mt-4 mr-2 ">
            <div className="my-1">{props.label}</div>
            <input className=" h-10 rounded-md border-2 border-slate-500 px-3" placeholder={props.placeholder} type={props.type || "text"}></input>
        </div>
    )
}