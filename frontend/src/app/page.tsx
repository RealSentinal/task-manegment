"use client"
import Auth from "@/components/auth/Auth";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const isAuth = async () => {
      const response = await axios.post(`/api/auth/authenticate`, { token: localStorage.getItem("token") }, {
        withCredentials: true
      })
      console.log(response.data)
    }

    isAuth()
  }, [])
  return (
    <main className="w-screen h-screen bg-zinc-900 flex items-center justify-center">
      <Auth />
    </main>
  );
}
