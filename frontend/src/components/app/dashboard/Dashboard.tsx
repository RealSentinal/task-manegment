import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Settings, Bell } from "lucide-react"

function Dashboard() {
    return (
        <div className="w-10/12 h-screen">
            <div className="flex flex-row w-full items-center justify-end p-4 mt-2">
                <div className="flex flex-row relative items-center w-5/12 mr-96">
                    <Search className="absolute text-white mt-1  ml-2" />
                    <Input placeholder="Search for tasks" type="text" className="bg-zinc-700 border-none shadow-2xl pl-10 w-full" />
                </div>
                <Button className="mr-1 ml-2 hover:border-2 w-14 h-14">
                    <Bell />
                </Button>
                <Button className="ml-1 mr-2 hover:border-2 w-14 h-14">
                    <Settings />
                </Button>
                <Avatar className="w-12 h-12 mr-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                        <span className="sr-only">img</span>
                    </AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Dashboard