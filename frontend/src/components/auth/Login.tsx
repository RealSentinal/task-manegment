import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

function login() {
    return (
        <Card className="bg-zinc-800 border-none">
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
                    <h1 className="text-zinc-400 text-wrap">By signing up, I agree with the <Link href="#terms" className="underline">Terms of Use</Link> & <Link className="underline" href="#privacy">Privacy Policy</Link></h1>
                </div>
                <Button className="w-3/6 bg-zinc-600">Sign in</Button>
            </CardContent>
        </Card>
    )
}

export default login