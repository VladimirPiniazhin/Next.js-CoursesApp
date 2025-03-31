# Courses App (expample: https://vladimirpiniazhin.github.io/Next.js-CoursesApp/)

An educational courses browsing and search application built with Next.js 15.

## Requirements

- Node.js 18.x or higher
- npm 9.x or higher
- Docker and docker-compose (for container deployment)

## Running with npm

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file and add required environment variables:
```bash
NEXT_PUBLIC_DOMAIN=https://courses-top.ru
```

3. Start the application:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Running with Docker

1. Create `.env` file with the same environment variables

2. Build and start containers:
```bash
docker-compose up --build
```

The application will be available at [http://localhost](http://localhost)

## Production Build

```bash
npm run build
npm start
```


