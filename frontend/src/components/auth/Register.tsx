"use client"
import { useState } from "react"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card"
import { User, Lock, Eye, EyeOff, Mail } from "lucide-react"
import { Separator } from "../ui/separator"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

function register() {
    const register = () => {
        const origin: string = window.location.origin
        const username = document.getElementById("reg-username") as HTMLInputElement
        const email = document.getElementById("reg-email") as HTMLInputElement
        const password = document.getElementById("reg-password") as HTMLInputElement
        const confirmPassword = document.getElementById("reg-confirm-password") as HTMLInputElement
        axios.post(`${origin}/api/register`, {
            username: username.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }).then((res) => {
            console.log(res)
        })
    }

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <Card className="bg-zinc-800 border-none shadow-2xl">
            <CardHeader>
                <CardTitle className="text-white">Register</CardTitle>
                <CardDescription className="text-zinc-400">
                    Enter your email and password to register
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="flex flex-row relative items-center">
                    <User className="text-zinc-200 absolute ml-3" />
                    <Input id="reg-username" className="mb-1 bg-zinc-700 border-none placeholder:text-zinc-400 pl-12" type="text" placeholder="Username" />
                </div>
                <div className="flex flex-row relative items-center">
                    <Mail className="text-zinc-200 absolute ml-3" />
                    <Input id="reg-email" className="mb-1 bg-zinc-700 border-none placeholder:text-zinc-400 mt-1 pl-12" type="email" placeholder="Email" />
                </div>
                <div className="flex flex-row gap-2 mt-1 mb-1">
                    <div className="flex flex-row relative items-center">
                        <Lock className="text-zinc-200 absolute ml-3" />
                        <Input id="reg-password" className="bg-zinc-700 border-none placeholder:text-zinc-400 pl-12" type={showPassword ? "text" : "password"} placeholder="Password" />
                        {showPassword ? <Eye onClick={() => setShowPassword(!showPassword)} className="text-zinc-200 absolute right-3" /> : <EyeOff onClick={() => setShowPassword(!showPassword)} className="text-zinc-200 absolute right-3 cursor-pointer" />}
                    </div>
                    <div className="flex flex-row relative items-center">
                        <Lock className="text-zinc-200 absolute ml-3" />
                        <Input id="reg-confirm-password" className="bg-zinc-700 border-none placeholder:text-zinc-400 pl-12" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" />
                        {showConfirmPassword ? <Eye onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-zinc-200 absolute right-3 cursor-pointer" /> : <EyeOff onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-zinc-200 absolute right-3 cursor-pointer" />}
                    </div>
                </div>
                <div className="flex flex-row">
                    <Checkbox className="text-zinc-400 border-white mt-1 mr-2 checked:bg-white">Remember me</Checkbox>
                    <h1 className="text-zinc-200 text-sm text-wrap">by registering, I agree with the <Link href="#terms" className="underline">Terms of Use</Link> & <Link className="underline" href="#privacy">Privacy Policy</Link></h1>
                </div>
                <Button onClick={register} className="w-full mt-2 bg-cyan-600 hover:bg-cyan-700">Register</Button>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center w-full">
                <div className="w-5/12 flex flex-row items-center justify-center mt-2">
                    <Separator className="mx-2 w-full" />
                    <h1 className="text-white">Or</h1>
                    <Separator className="mx-2 w-full" />
                </div>
                <div className="w-full h-20 flex flex-row justify-center items-center gap-6">
                    <Button className="bg-neutral-300 w-14 h-14 rounded-full flex items-center justify-center"><Image src="/google.svg" alt="google" width={26} height={26} /></Button>
                    <Button className="bg-neutral-300 w-14 h-14 rounded-full flex items-center justify-center"><Image src="/github.svg" alt="github" width={26} height={26} /></Button>
                    <Button className="bg-neutral-300 w-14 h-14 rounded-full flex items-center justify-center"><Image src="/apple.svg" alt="apple" width={26} height={26} /></Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default register