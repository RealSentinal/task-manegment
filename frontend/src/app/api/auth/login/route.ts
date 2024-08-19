import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const username: string = body.username;
    const password: string = body.password;

    if (!username || !password) {
        return NextResponse.json({ error: "Missing username or password" }, { status: 400 });
    }

    axios.post(`http://localhost:3001/api/auth/login`, {
        username: username,
        password: password
    },
        {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        }
    ).then((res) => {
        return NextResponse.json(res.data, { status: 200 })
    }).catch((err) => {
        return NextResponse.json({ error: err }, { status: 500 })
    })
}