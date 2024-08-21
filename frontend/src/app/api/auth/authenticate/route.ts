import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

async function POST(request: NextRequest) {
    const body = await request.json();
    const token = body.token;
    try {
        const response = await axios.post(`http://localhost:3001/api/auth/authenticate`, { token: token }, {
            withCredentials: true
        });
        return NextResponse.json(response.data, { status: 200 });
    } catch (err: Error | any) {
        console.error(err);
        return NextResponse.json({ error: err.message || "Something went wrong" }, { status: 500 });
    }
}

export { POST };
