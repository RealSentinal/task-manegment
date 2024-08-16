import Link from "next/link"
import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"

function login() {
    return (
        <Card className="bg-zinc-800 border-none shadow-2xl">
            <CardHeader>
                <CardTitle className="text-white">Sign in</CardTitle>
                <CardDescription className="text-zinc-400">
                    Enter your email and password to sign in
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                <Input className="mb-1 bg-zinc-700 border-none placeholder:text-zinc-400" type="email" placeholder="Email" />
                <Input className="mb-2 bg-zinc-700 border-none placeholder:text-zinc-400" type="password" placeholder="Password" />
                <div className="flex flex-row">
                    <Checkbox className="text-zinc-400 border-white mt-1 mr-2 checked:bg-white">Remember me</Checkbox>
                    <h1 className="text-zinc-200 text-sm text-wrap">By signing up, I agree with the <Link href="#terms" className="underline">Terms of Use</Link> & <Link className="underline" href="#privacy">Privacy Policy</Link></h1>
                </div>
                <Button className="w-full mt-2 bg-cyan-600 hover:bg-cyan-700">Sign in</Button>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center w-full">
                <h1 className="text-white">Forget password ? <Link href="#forgot" className="underline text-cyan-600 hover:text-cyan-700">Click here</Link></h1>
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