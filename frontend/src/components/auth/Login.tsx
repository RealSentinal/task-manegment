"use client"
import { useRef, useState } from "react"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card"
import { User, Lock, Eye, EyeOff } from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"

function login() {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const login = () => {
        console.log(email, password)
        axios.post(`/api/auth/login`, {
            username: email.current?.value,
            password: password.current?.value
        }).then((res) => {
            console.log(res)
        })
    }

    const [showPassword, setShowPassword] = useState(false)
    const [terms, setTerms] = useState(false)

    return (
        <Card className="bg-zinc-800 border-none shadow-2xl">
            <CardHeader>
                <CardTitle className="text-white">Sign in</CardTitle>
                <CardDescription className="text-zinc-400">
                    Enter your email and password to sign in
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                <div className="flex flex-row relative items-center">
                    <User className="text-zinc-200 absolute ml-3" />
                    <Input id="email" ref={email} className="mb-1 bg-zinc-700 border-none placeholder:text-zinc-400 pl-12" type="text" placeholder="Username" />
                </div>
                <div className="flex flex-row items-center relative">
                    <Lock className="text-zinc-200 absolute ml-3" />
                    <Input id="password" ref={password} className="mb-2 bg-zinc-700 border-none placeholder:text-zinc-400 mt-1 pl-12" type={showPassword ? "text" : "password"} placeholder="Password" />
                    {showPassword ? <Eye onClick={() => setShowPassword(!showPassword)} className="text-zinc-200 absolute right-3 cursor-pointer" /> : <EyeOff onClick={() => setShowPassword(!showPassword)} className="text-zinc-200 absolute right-3 cursor-pointer" />}
                </div>
                <div className="flex flex-row items-center">
                    <Checkbox className="text-zinc-400 border-white mr-2 checked:bg-white" onCheckedChange={() => setTerms(!terms)}>Remember me</Checkbox>
                    <h1 className="text-zinc-200 text-sm text-wrap m-2">By logging in, I agree with the <Link href="#terms" className="underline">Terms of Use</Link> & <Link className="underline" href="#privacy">Privacy Policy</Link></h1>
                </div>
                <Button onClick={login} className="w-full mt-2 bg-cyan-600 hover:bg-cyan-700" disabled={!terms}>Log in</Button>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center w-full">
                <h1 className="text-white">Forgot password ? <Link href="#forgot" className="underline text-cyan-600 hover:text-cyan-700">Click here</Link></h1>
                <div className="w-5/12 flex flex-row items-center justify-center mt-2">
                    <Separator className="mx-2 w-full" />
                    <h1 className="text-white">Or</h1>
                    <Separator className="mx-2 w-full" />
                </div>
                <div className="w-full h-20 flex flex-row justify-center items-center gap-4">
                    <Button className="bg-neutral-300 w-14 h-14 rounded-full flex items-center justify-center"><Image src="/google.svg" alt="google" width={26} height={26} /></Button>
                    <Button className="bg-neutral-300 w-14 h-14 rounded-full flex items-center justify-center"><Image src="/github.svg" alt="github" width={26} height={26} /></Button>
                    <Button className="bg-neutral-300 w-14 h-14 rounded-full flex items-center justify-center"><Image src="/apple.svg" alt="apple" width={26} height={26} /></Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default login