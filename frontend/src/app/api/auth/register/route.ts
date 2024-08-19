import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

async function POST(request: NextRequest) {
    const body = await request.json();

    const username: string = body.username;
    const password: string = body.password;
    const email: string = body.email;

    const username_regex = /^[a-zA-Z0-9]/;
    const password_regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/
    const email_regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|icloud\.com|hotmail\.com)$/

    if (!username || !password || !email) {
        return NextResponse.json({ error: "Missing username or password" }, { status: 400 });
    }

    if (!username_regex.test(username)) {
        return NextResponse.json({ error: "Username must contain only letters and numbers" }, { status: 400 });
    }

    if (!password_regex.test(password)) {
        return NextResponse.json({ error: "Password must contain at least one letter, one number, and one special character" }, { status: 400 });
    }

    if (!email_regex.test(email)) {
        return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    try {
        const res = await axios.post(
            `http://localhost:3000/api/auth/register`,
            {
                username: username,
                password: password,
                email: email,
            },
            {
                withCredentials: true,
            }
        );

        return NextResponse.json(res.data, { status: 200 });
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export { POST }