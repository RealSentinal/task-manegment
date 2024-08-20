import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

async function POST(request: NextRequest) {
    const body = await request.json();
    const username: string = body.username;
    const password: string = body.password;

    if (!username || !password) {
        return NextResponse.json({ error: "Missing username or password" }, { status: 400 });
    }

    const response = await axios.post(`http://localhost:3000/api/auth/login`, {
        username: username,
        password: password
    },
        {
            withCredentials: true,
        }
    )
    return NextResponse.json(response.data, { status: 200 });
}

export { POST }