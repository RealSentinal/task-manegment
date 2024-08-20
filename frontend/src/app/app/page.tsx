"use client"
import { useEffect, useState } from "react"
import BeatLoader from 'react-spinners/BeatLoader'
import Link from "next/link"
import axios from "axios"
import Menu from "@/components/app/Menu"
import { redirect } from "next/navigation"

function app() {
    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        const isAuth = async () => {
            try {
                const response = await axios.post(`/api/auth/authenticate`, { token: localStorage.getItem("token") }, {
                    withCredentials: true
                })
                console.log(response)
                if (response.data.active) {
                    setIsAuthenticated(true)
                }
            } catch (error: any) {
                setError(new Error(error))
            } finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 1000);
            }
        }
        isAuth()
    }, [])

    if (isLoading) {
        return (
            <main className="w-screen h-screen bg-zinc-900 flex items-center justify-center">
                <BeatLoader color="#36d7b7" />
            </main>
        )
    }

    if (error) {
        return (
            <main className="w-screen h-screen bg-zinc-900 flex flex-col items-center justify-center">
                <p className="text-red-500 text-2xl font-bold">Something went wrong</p>
                <Link className="text-red-600 underline" href="#help">I think there's something you need to tell me</Link>
            </main>
        )
    }

    if (!isAuthenticated) {
        return (
            redirect("/")
        )
    }

    return (
        <main className="w-screen h-screen bg-zinc-900 flex flex-row items-center justify-start">
            <Menu />
        </main>
    )
}

export default app