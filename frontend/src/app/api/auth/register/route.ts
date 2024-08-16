import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const body = await request.json();
    const username: string = body.username;
    const password: string = body.password;
    const email: string = body.email;
    if (!username || !password) {
        return NextResponse.json({ error: "Missing username or password" }, { status: 400 });
    }
    // Send a request to server
}