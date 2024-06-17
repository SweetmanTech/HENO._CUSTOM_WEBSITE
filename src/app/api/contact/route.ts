import { HENO_EMAIL } from "@/lib/consts"
import sendEmail from "@/lib/sendEmail"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { emailAddress, name, subject, message } = body

    const personalizations = [
      {
        to: [{ email: emailAddress, name }],
        subject: "Contact Us - HENO",
      },
    ]

    const data = {
      personalizations,
      content: [
        {
          type: "text/html",
          value: `<html><body>
          <p><strong>Full Name</strong><br>
          ${name} </p>
          <p><strong>Subject</strong><br>
          ${subject || "No response."} </p>
          <p><strong>Email Address</strong><br>
          <a href="mailto:${emailAddress}" target="_blank">${emailAddress}</a> </p>
          <p><strong>Message</strong><br>
          ${message} </p>
          </body></html>`,
        },
      ],
      from: {
        email: HENO_EMAIL,
        name: "HENO",
      },
      reply_to: {
        email: HENO_EMAIL,
        name: "HENO",
      },
    }
    const response = await sendEmail(data)
    return NextResponse.json({ data: response.data })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
