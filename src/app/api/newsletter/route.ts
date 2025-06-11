/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();

  try {
    const response = await fetch(`${process.env.API_URL}/mailchimp/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return NextResponse.json({ success: true, data: responseData });
  } catch (error: any) {
    const error_message = error?.response.data?.errors
      ? error?.response.data?.errors[0]?.message
      : error?.response.data?.message ?? error?.response.data?.error;
    return NextResponse.json(
      {
        success: false,
        error: error_message || "Oops! Something went wrong, please try again",
      },
      { status: error.response?.status || 500 }
    );
  }

  // Return the response to the frontend
  // return new (JSON.stringify(responseData), {
  //   status: 200,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
}
