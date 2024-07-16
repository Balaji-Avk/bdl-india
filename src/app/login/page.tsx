import Backbtn from "@/components/ui/backbtn"
import { Button } from "@/components/ui/button"
import UserInput from "@/components/ui/userinput"
import Link from "next/link"

export default function Login(){
    return(
        <div className="bg-black h-screen">
            <div className="pt-5 pl-5 fixed">
                <Backbtn />
            </div>
            <div className=" flex h-screen items-center ">
                <div className="items-center flex flex-col w-screen">
                    <div className="px-8 py-10 border-2 border-white rounded-lg ">
                        <div className="my-2 text-center font-bold text-3xl">
                            Welcome back
                        </div>
                        <p className="my-2 text-center  text-md">
                            Login to your account
                        </p>
                        <form >
                            <div className="flex flex-col ">
                                <UserInput placeholder="EMP123456" label = "Employee ID" />
                                <UserInput placeholder="password" label = "Password" type="password" />
                            </div>
                            <div className="flex flex-col my-4">
                                <Button >Login</Button>
                            </div>
                        </form>
                        <p className="text-wrap">Don&rsquo;t have an account ? <Link href="/signup">Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}