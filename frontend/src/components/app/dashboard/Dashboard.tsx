import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Settings, Bell } from "lucide-react"

function Dashboard() {
    return (
        <div className="w-fit h-full">
            <div>
                <div>
                    <Search />
                    <Input type="text" />
                </div>
                <Settings />
                <Bell />
                <Avatar>
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