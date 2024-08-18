import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const username: string = body.username;
    const password: string = body.password;
    const email: string = body.email;
    if (!username || !password || !email) {
        return NextResponse.json({ error: "Missing username or password" }, { status: 400 });
    }

    return NextResponse.json({ username, password, email }, { status: 200 });

    // axios.post(`http://localhost:3001/api/auth/register`, {
    //     username: username,
    //     password: password,
    //     email: email
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