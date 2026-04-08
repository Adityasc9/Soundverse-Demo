# Soundverse Analytics Dashboard Demo

This project is a public demo version of an internal analytics dashboard I built during my internship at Soundverse.ai.

The original dashboard depended on private company infrastructure, including Google Analytics, internal APIs, and MongoDB data. This version keeps the same dashboard flow and UI, but replaces those dependencies with generated demo data so it can be run and shared publicly.

## Stack

- React
- Node.js
- Express
- MongoDB / Mongoose
- Google OAuth2
- Google Analytics 4
- Vercel

## Demo Data

The backend serves realistic fake data in the same formats expected by the original code:

- 360 users
- 12,000+ activity rows
- 2,400 audio rows
- 1,800 prompt rows
- 4,000+ engagement rows
- GA4-style active-user responses using `rows`, `dimensionValues`, and `metricValues`
