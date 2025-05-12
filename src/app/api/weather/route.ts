import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=d020d4294df30052d5120dfff8353fb1";

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("API call failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
