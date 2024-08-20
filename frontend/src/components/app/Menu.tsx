import { useState } from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { LayoutDashboard, Calendar, ClipboardList, Settings, Plus } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'

function Menu() {
    const [isActiveButton, setIsActiveButton] = useState<string>("dashboard")
    const buttonCss = "bg-transparent rounded-full text-white hover:bg-transparent hover:border-2 active:border-cyan-400 relative flex flex-row items-center"
    const buttonActiveCss = "bg-transparent rounded-full text-white hover:bg-transparent relative border-2 active:border-cyan-400 flex flex-row items-center"
    return (
        <div className='w-2/12 bg-zinc-800 h-screen flex flex-col items-center gap-1'>
            <h1 className='text-white font-bold w-full flex justify-center text-3xl italic mt-6'>SENTINAL</h1>
            <Separator className='my-4 w-[90%]' />
            <div className='w-full h-fit flex flex-col gap-1 px-8'>
                <h1 className='text-white font-bold w-full flex justify-start pl-2 mb-2 text-xl'>General</h1>
                <Button onClick={() => setIsActiveButton("dashboard")} className={isActiveButton == "dashboard" ? buttonActiveCss : buttonCss}><LayoutDashboard className='w-5 h-5 left-[28%] absolute text-white' />Board</Button>
                <Button onClick={() => setIsActiveButton("calender")} className={isActiveButton == "calender" ? buttonActiveCss : buttonCss}><Calendar className='w-5 h-5 left-[28%] absolute text-white' />Calender</Button>
                <Button onClick={() => setIsActiveButton("projects")} className={isActiveButton == "projects" ? buttonActiveCss : buttonCss}><ClipboardList className='w-5 h-5 left-[28%] absolute text-white' />Project</Button>
            </div>
            <Separator className='my-4 w-[90%]' />
            <div className='w-full h-3/6 flex flex-col gap-1 px-8'>
                <div className='w-full h-fit flex flex-row items-center'>
                    <h1 className='text-white font-bold w-6/12 flex justify-start pl-2 mb-2 text-xl'>Teams</h1>
                    <Button className="bg-transparent hover:bg-transparent border-2 active:border-cyan-400 pl-5 rounded-full text-white relative flex flex-row items-center text-base w-6/12"><Plus className='w-5 h-5 left-4 absolute text-white' />invite</Button>
                </div>
                <h1 className='text-white font-bold w-full flex justify-center pl-2 mb-2 text-xl'>No teams</h1>
            </div>
            <Separator className='mb-4 mt-12 w-[90%]' />
            <div className='w-full h-fit flex flex-row items-start justify-start px-4 gap-2'>
                <Avatar className='w-14 h-14'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback delayMs={600}>USER</AvatarFallback>
                </Avatar>
                <h1 className='text-white text-xl pl-2'>Sentinal</h1>
                <Button className='bg-transparent hover:bg-transparent border-2 hover:border-cyan-200 active:border-cyan-400 ml-16 mt-2 rounded-full text-white'><Settings className='w-5 h-5 text-white' /></Button>
            </div>
        </div >
    )
}

export default Menu