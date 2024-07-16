interface Props{
    rowKey:string
    value?:string
}

export default function TRow(props:Props){
    return (
        <tr className="flex justify-between border-b border-slate-500 py-3">
            <th className="font-medium text-base">{props.rowKey}</th>
            <th className="font-medium text-base">{props.value}</th>
        </tr>
    )
}