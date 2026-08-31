# Handmade Craft Market

## Project overview
This project implements a handmade craft marketplace sample application designed to support a complete buyer and seller workflow. The application allows users to browse products, view product details, place orders, upload new listings, and manage existing listings.

The solution follows the approved design and prototype for a lightweight marketplace system and demonstrates a coherent end-to-end workflow for the assignment.

## Assignment requirement coverage
The application includes the key assignment requirements:

- Product browsing and catalog view
- Product detail page
- Order placement and confirmation flow
- Seller upload flow
- Listing management and edit/delete actions
- Frontend and backend separation
- Manual deployment to an EC2 instance
- Basic security and environment hygiene

## Architecture summary
### Frontend
- React application built with Vite
- Located in the `frontend/` directory
- Responsible for routing, page rendering, and user interactions

### Backend
- Node.js and Express server
- Located in the `backend/` directory
- Exposes REST endpoints for products, orders, uploads, and listing management

### Data flow
- The frontend fetches product and order data from the backend API
- The backend stores in-memory sample data for the assignment workflow
- The app demonstrates a simple client-server architecture appropriate for a demo deployment

## Tech stack
- Frontend: React, Vite
- Backend: Node.js, Express
- Routing: React Router
- Runtime config: dotenv

## Local development setup
### 1. Install project dependencies
```bash
cd /home/ubuntu/handmade-craft-market-
npm install

cd /home/ubuntu/handmade-craft-market-/frontend
npm install
```

### 2. Start the backend
```bash
cd /home/ubuntu/handmade-craft-market-
PORT=5001 node backend/server.js
```

Expected output:
```bash
Backend running on http://localhost:5001
```

### 3. Start the frontend
```bash
cd /home/ubuntu/handmade-craft-market-/frontend
npm run dev -- --host 0.0.0.0
```

Application access:
- Frontend: http://localhost:5173/
- Backend API: http://localhost:5001/products

## Manual EC2 deployment procedure
The sample application was deployed manually to an Amazon EC2 instance for assignment demonstration purposes.

### 1. Launch EC2 instance
- Create an Ubuntu or Amazon Linux EC2 instance
- Ensure the instance runs in a public subnet
- Attach a security group that allows the required inbound traffic

### 2. Connect to the instance
```bash
ssh -i your-key.pem ubuntu@PUBLIC_IP
```

### 3. Install Node.js and npm
```bash
sudo apt update
sudo apt install -y nodejs npm
```

### 4. Upload the project files
Copy the project source code to the EC2 instance.

### 5. Install dependencies
```bash
cd /home/ubuntu/handmade-craft-market-
npm install

cd /home/ubuntu/handmade-craft-market-/frontend
npm install
```

### 6. Configure environment variables
Create a local `.env` file and set the application port:
```env
PORT=5001
```

Do not commit secrets or credentials into the repository. Keep environment-specific configuration local to the instance.

### 7. Start the backend
```bash
cd /home/ubuntu/handmade-craft-market-
PORT=5001 nohup node backend/server.js > backend.log 2>&1 &
```

### 8. Verify backend availability
```bash
curl http://localhost:5001/products
```

### 9. Public access verification
To test the public endpoint, run the following from a machine outside the EC2 instance:
```bash
curl http://PUBLIC_IP:5001/products
```

## Security hygiene
The deployment follows basic security practices expected for the assignment:

- No secrets or credentials are stored in the repository
- Configuration values are kept in local environment files
- Only required inbound ports are exposed
- The application is launched on the required runtime port and restricted to necessary access

Recommended EC2 inbound rules:
- 22 for SSH access (restrict to your IP or office/school IP range)
- 80 for HTTP access (restrict to your IP or office/school IP range, or 0.0.0.0/0 for public testing)
- 443 for HTTPS access (restrict to your IP or office/school IP range, or 0.0.0.0/0 for public testing)
- 5001 for the backend API (restrict to your IP or office/school IP range, or 0.0.0.0/0 for public testing)

**Important security note:** For testing and demo purposes, you can allow access from anywhere (0.0.0.0/0). However, for security best practices and when graders need access from specific locations, restrict inbound traffic to only the required IP ranges (e.g., your school/office IP, your personal IP, or your tutor's IP).

## Deployment URL
The application was deployed to an EC2 instance and configured to serve the API on the required port using the public IP of the instance.

Example:
```text
http://PUBLIC_IP:5001/products
```

## Known limitations
- Data is stored in memory and not persisted in a database
- Login is a lightweight UI flow and not backed by a secure authentication system
- No persistent file storage is implemented for uploaded assets
- This is a sample marketplace prototype intended for demonstration purposes

## Verification checklist
Before submission, confirm the following:

- Frontend builds successfully
- Backend starts successfully
- API responds on the required port
- Security group allows required inbound traffic
- No secrets are committed
- Deployment procedure is documented clearly

## Project structure
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
├── .gitignore
├── package.json
├── README.md
├── package-lock.json
└── node_modules/
```

## Result
This project delivers a complete sample marketplace workflow, demonstrates frontend-backend separation, and documents a manual EC2 deployment procedure suitable for the assignment requirements.
