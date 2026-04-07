# Soundverse Analytics Portfolio Demo

This project is a self-contained portfolio rebuild of an internal Soundverse analytics dashboard. It no longer depends on company MongoDB data, internal Google Analytics access, or live `soundverse.ai` endpoints.

## What Changed

- Generated demo backend data for users, activities, prompts, audios, audio types, and engagement rows
- Added GA-style fake active-user report data in the same `rows / dimensionValues / metricValues` shape the original app expected
- Switched the frontend to local `/api` endpoints
- Made Google sign-in optional, with a demo-mode fallback when no OAuth client is configured
- Added a root Vercel config so frontend and backend can ship from one repo

## Local Development

Install dependencies in each app:

```bash
cd soundverseBackend && npm install
cd ../soundverseFrontend && npm install
```

Run the backend:

```bash
cd soundverseBackend
npm start
```

Run the frontend in a second terminal:

```bash
cd soundverseFrontend
npm start
```

The frontend uses a CRA proxy for `http://localhost:8080`, so `/api/*` calls will reach the local backend automatically.

## Environment Variables

Frontend: [soundverseFrontend/.env.example](/Users/aditya/Desktop/Soundverse/soundverseFrontend/.env.example)

- `REACT_APP_GOOGLE_CLIENT_ID`:
  Optional. If provided, the landing page offers real Google sign-in.
- `REACT_APP_API_BASE_URL`:
  Optional. Leave blank for same-origin or CRA proxy usage.

Backend: [soundverseBackend/.env.example](/Users/aditya/Desktop/Soundverse/soundverseBackend/.env.example)

- `PORT`:
  Optional. Defaults to `8080`.

## Vercel Notes

This repo includes [vercel.json](/Users/aditya/Desktop/Soundverse/vercel.json) to build the React frontend and route `/api/*` requests to the Node backend.

For Google sign-in to work for any Google account, the OAuth app must be configured in Google Cloud Console as an External app, with the correct Authorized JavaScript Origins and Redirect URIs for your local and Vercel domains.
