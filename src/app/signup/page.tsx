import Backbtn from "@/components/ui/backbtn"
import { Button } from "@/components/ui/button"
import UserInput from "@/components/ui/userinput"
import Link from "next/link"

export default function Signup(){
    return(
        <div className="bg-black h-screen">
            <div className="pt-5 pl-5 fixed">
                <Backbtn />
            </div>
            <div className=" flex h-screen items-center ">
                <div className="items-center flex flex-col w-screen">
                    <div className="px-8 pt-10 pb-8 border-2 border-white rounded-lg">
                        <div className="my-2 text-center font-bold text-3xl">
                            Welcome to BDL
                        </div>
                        <p className="my-2 text-center  text-md">
                            Create your account
                        </p>
                        <form >
                            <div className="flex flex-col ">
                                <UserInput placeholder="Albert" label = "FirstName" />
                                <UserInput placeholder="Einstein" label = "LastName" />
                                <UserInput placeholder="EMP123456" label = "Employee ID" />
                                <UserInput placeholder="123456789" label = "Password" type="password" />
                            </div>
                            <div className="flex flex-col my-4">
                                <Button >Signup</Button>
                            </div>
                        </form>
                        <p className="text-wrap">Already have an account ? <Link href="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}