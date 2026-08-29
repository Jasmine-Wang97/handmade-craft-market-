# Handmade Craft Market

## Project Summary
This project is a simple handmade product marketplace sample application designed to demonstrate a complete customer and seller workflow. The application allows users to browse products, view product details, place an order, upload a new product listing, and manage existing listings.

The solution is implemented using a React frontend and an Express backend, with mock in-memory data for demonstration purposes.

## Assignment Relevance
This project aligns with the assignment requirements for a sample application workflow and local deployment demonstration. It includes the core end-to-end experience expected for a marketplace prototype:

- Customer browsing and product detail viewing
- Product ordering flow
- Seller listing upload flow
- Seller listing management (edit/delete)
- Frontend and backend separation
- Local API-driven interaction

## Architecture Overview
The application follows a simple client-server architecture:

### Frontend
- Built with React and Vite
- Located in the `frontend/` folder
- Handles page routing and UI interactions
- Calls the API at `http://localhost:3000`

### Backend
- Built with Node.js and Express
- Located in the `backend/` folder
- Exposes REST API routes for:
  - product listing
  - product detail retrieval
  - order creation
  - listing upload
  - listing update and deletion
- Uses in-memory arrays for demo data

## Features Implemented
- Product catalog page
- Product detail page
- Order form and confirmation page
- Upload product form and confirmation page
- Seller listing management page
- Edit listing flow
- Delete listing flow

## Tech Stack
- Frontend: React, Vite
- Backend: Node.js, Express
- Routing: React Router
- Data handling: JSON requests/responses

## Setup Instructions
### 1. Install frontend dependencies
```bash
cd "c:\handmade-craft-market-\frontend"
npm install
```

### 2. Install backend dependencies
```bash
cd "c:\handmade-craft-market-"
npm install express cors
```

### 3. Start the backend server
```bash
cd "c:\handmade-craft-market-\backend"
node server.js
```

Expected result:
```bash
Backend running on http://localhost:3000
```

### 4. Start the frontend app
```bash
cd "c:\handmade-craft-market-\frontend"
npm run dev -- --host 0.0.0.0
```

Then open the app in the browser:
- Frontend: http://localhost:5173/
- Backend API: http://localhost:3000/

## Deployment / Local Run Notes
This version is configured for local deployment and local demonstration. The app runs from two separate services:

- Frontend is served by Vite on a local port
- Backend is served by Express on port 3000

The frontend must be running alongside the backend for the marketplace pages to fetch products and submit orders correctly.

## Known Limitations
- No database is connected; all data is stored in memory.
- No authentication or login persistence is implemented.
- There is no persistent storage or file upload service.
- This is a demo application and not production-ready for public deployment.
- Image URLs are sample placeholders rather than managed media assets.

## Troubleshooting
If the app does not render correctly:

1. Ensure the backend is running before opening the frontend.
2. Ensure frontend dependencies are installed:
   ```bash
   cd "c:\handmade-craft-market-\frontend"
   npm install
   ```
3. Run the frontend with host binding:
   ```bash
   npm run dev -- --host 0.0.0.0
   ```
4. If a port is already in use, Vite may automatically choose another port.

## Project Structure
```text
handmade-craft-market-
├── backend/
│   ├── listingRoutes.js
│   ├── order.js
│   ├── orderRoutes.js
│   ├── product.js
│   ├── productDetail.js
│   ├── products.js
│   ├── server.js
│   └── uploadRoutes.js
├── frontend/
│   ├── index.html
│   ├── package.json
│   └── src/
├── package.json
├── README.md
├── node_modules/
└── package-lock.json
```

## Result
The project is able to run locally as a functioning sample marketplace and demonstrates the required end-to-end workflow for a lightweight assignment submission.
