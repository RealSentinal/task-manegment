import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Login from "./Login";
import Register from './Register'

function auth() {
    return (
        <Tabs defaultValue="login">
            <TabsList className="grid w-full h-14 grid-cols-2 bg-zinc-800 p-1" >
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList >
            <TabsContent value="login">
                <Login />
            </TabsContent>
            <TabsContent value="register">
                <Register />
            </TabsContent>
        </Tabs >
    )
}

export default auth