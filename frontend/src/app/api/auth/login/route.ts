import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log(body)
    const username: string = body.username;
    const password: string = body.password;
    if (!username || !password) {
        return NextResponse.json({ error: "Missing username or password" }, { status: 400 });
    }

    return NextResponse.json({ username, password }, { status: 200 });

    // axios.post(`http://localhost:3001/api/auth/login`, {
    //     username: username,
    //     password: password
    // },
    //     {
    //         withCredentials: true,
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }
    // ).then((res) => {
    //     console.log(res)
    // }).catch((err) => {
    //     console.log(err)
    // })
}