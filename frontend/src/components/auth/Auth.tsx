import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Login from "./Login";
import Register from './Register'

function auth() {
    return (
        <Tabs defaultValue="account">
            <TabsList className="grid w-full h-14 grid-cols-2 bg-zinc-800 p-1" >
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList >
            <TabsContent value="account">
                <Login />
            </TabsContent>
            <TabsContent value="password">
                <Register />
            </TabsContent>
        </Tabs >
    )
}

export default auth