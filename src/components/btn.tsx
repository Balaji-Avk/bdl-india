import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Props{
  title: string
  href:string
  variant?: "destructive" | "link" | "default"
}

export function Menubtn( props : Props) {
  return (
    <Button variant={props.variant || "link"} asChild>
        <Link href={props.href}>{props.title}</Link>
    </Button> 
  )
}
