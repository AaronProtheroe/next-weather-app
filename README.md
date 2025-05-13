This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About the app

This is a simple weather app that allows a user to input a city name and it will return the current weather for the city the user has input. The app will display the weather using metric system units.

## Tech stack

The project uses NextJs with tailwindcss. It connects to OpenWeather's api service to query weather data. The project also uses TanStack React Query to allowing for easy and simplified data fetching from the server as well as managing loading and error states.

## Setting up locally

Simply run:

```bash
git clone https://github.com/AaronProtheroe/next-weather-app.git
```

and then

```bash
npm install
```

to install dependencies.

## Create a .env file

You can get a free API key from this link https://openweathermap.org/city/2643743.

Simply create a .env file with an env called API_KEY.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
