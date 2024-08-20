import { useState } from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { LayoutDashboard, Calendar, ClipboardList, MessageSquareTextIcon, Plus, LogOut } from 'lucide-react'

function Menu() {
    const [isActiveButton, setIsActiveButton] = useState<string>("dashboard")

    const logout = () => {
        localStorage.removeItem("token")
        window.location.href = "/";
    }

    const buttonCss = "bg-transparent rounded-full text-white hover:bg-transparent pl-6 hover:border-2 active:border-cyan-400 relative flex flex-row items-center"
    const buttonActiveCss = "bg-white rounded-full text-white hover:bg-white relative pl-6 border-2 active:border-cyan-400 flex flex-row items-center text-grey-400"
    const buttonSvg = "w-5 h-5 left-[28%] absolute text-white"
    const buttonSvgActive = "w-5 h-5 left-[28%] absolute text-zinc-800 text-grey-400"

    return (
        <div className='w-[330px] bg-zinc-800 h-screen flex flex-col items-center gap-1'>
            <h1 className='text-white font-bold w-full flex justify-center text-3xl italic mt-6'>SENTINAL</h1>
            <Separator className='my-4 w-[90%]' />
            <div className='w-full h-fit flex flex-col gap-1 px-8'>
                <h1 className='text-white font-bold w-full flex justify-start pl-2 mb-2 text-xl'>General</h1>
                <Button onClick={() => setIsActiveButton("dashboard")} className={isActiveButton == "dashboard" ? buttonActiveCss : buttonCss}><LayoutDashboard className={isActiveButton == "dashboard" ? buttonSvgActive : buttonSvg} />Dashboard</Button>
                <Button onClick={() => setIsActiveButton("calendar ")} className={isActiveButton == "calendar " ? buttonActiveCss : buttonCss}><Calendar className={isActiveButton == "calendar " ? buttonSvgActive : buttonSvg} />Calendar</Button>
                <Button onClick={() => setIsActiveButton("projects")} className={isActiveButton == "projects" ? buttonActiveCss : buttonCss}><ClipboardList className={isActiveButton == "projects" ? buttonSvgActive : buttonSvg} />Project</Button>
                <Button onClick={() => setIsActiveButton("inbox")} className={isActiveButton == "inbox" ? buttonActiveCss : buttonCss}><MessageSquareTextIcon className={isActiveButton == "inbox" ? buttonSvgActive : buttonSvg} />Inbox</Button>
            </div>
            <Separator className='my-4 w-[90%]' />
            <div className='w-full h-3/6 flex flex-col gap-1 px-8'>
                <h1 className='text-white font-bold w-6/12 flex justify-start pl-2 mb-2 text-xl'>Teams</h1>
                <div className='flex flex-col items-center'>
                    <h1 className='text-white font-bold w-full flex justify-center pl-2 mb-2 text-xl'>No teams</h1>
                    <Button className="bg-transparent hover:bg-transparent border-2 hover:bg-white hover:text-black pl-5 mt-1 rounded-full text-white relative flex flex-row items-center text-base w-6/12"><Plus className='w-5 h-5 left-4 absolute text-zinc-800' />Invite</Button>
                </div>
            </div>
        </div>
    )
}

export default Menu