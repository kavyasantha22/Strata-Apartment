import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  // In a real app, you would validate credentials against your database
  // This is just a simple example
  if (email === "admin@strata.com" && password === "password123") {
    // Create a session or token
    return NextResponse.json({
      success: true,
      user: {
        id: "1",
        name: "Committee Member",
        email: "admin@strata.com",
        role: "treasurer",
      },
    })
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
}

