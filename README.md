# Handmade Craft Market

## Project overview
This project is a sample handmade marketplace application built to demonstrate a complete customer and seller workflow. The application allows users to browse products, view product details, complete an order, upload a new listing, and manage their listings.

The application was developed as a lightweight full-stack prototype using React for the frontend and Express for the backend. The sample application workflow is aligned with the approved assignment design and prototype.

## Assignment requirement coverage
The implementation includes the major workflow steps required for the assignment:

- Product browsing
- Product detail page
- Order form and confirmation
- Seller upload flow
- Seller listing management
- Frontend and backend separation
- Manual deployment procedure for EC2

## Architecture
### Frontend
- Built with React and Vite
- Located in the `frontend/` directory
- Handles routing, page UI, and user interaction

### Backend
- Built with Node.js and Express
- Located in the `backend/` directory
- Exposes REST APIs for products, product details, orders, and listing operations
- Uses environment variables for runtime configuration

## Tech stack
- Frontend: React, Vite
- Backend: Node.js, Express
- Routing: React Router
- Runtime config: dotenv

## Local development
### 1. Install dependencies
```bash
cd "c:\handmade-craft-market-"
npm install

cd "c:\handmade-craft-market-\frontend"
npm install
```

### 2. Start the backend
```bash
cd "c:\handmade-craft-market-"
set PORT=5001
node backend/server.js
```

Expected output:
```bash
Backend running on http://localhost:5001
```

### 3. Start the frontend
```bash
cd "c:\handmade-craft-market-\frontend"
npm run dev -- --host 0.0.0.0
```

Open the app at:
- Frontend: http://localhost:5173/
- Backend API: http://localhost:5001/

## Manual EC2 deployment procedure
The sample application was prepared for manual deployment to an Amazon EC2 instance as part of the assignment workflow.

### 1. Launch an EC2 instance
- Use Amazon Linux or Ubuntu
- Choose a public subnet
- Attach a security group that allows inbound traffic for the required ports

### 2. Connect to the instance
```bash
ssh -i your-key.pem ec2-user@PUBLIC_IP
```

### 3. Install Node.js
For Amazon Linux:
```bash
sudo yum update -y
sudo yum install -y nodejs npm
```

### 4. Upload the project files
Copy the application source to the EC2 instance.

### 5. Install dependencies
```bash
cd /home/ec2-user/handmade-craft-market-
npm install
cd /home/ec2-user/handmade-craft-market-/frontend
npm install
```

### 6. Configure environment variables
Create a `.env` file in the project root and set the application port:
```env
PORT=5001
```

Do not commit secrets or real credentials to the repository. Keep environment values local to the instance.

### 7. Run the backend on the instance
```bash
cd /home/ec2-user/handmade-craft-market-
PORT=5001 node backend/server.js
```

### 8. Optional front-end public serving
If the frontend must also be publicly accessible, serve it with a public host binding or use a reverse proxy. For example:
```bash
cd /home/ec2-user/handmade-craft-market-/frontend
npm run dev -- --host 0.0.0.0
```

## Security hygiene
The sample application follows basic deployment hygiene:

- No secrets are committed to source control
- Environment-dependent settings are kept in `.env`
- The instance should use a security group with only the required inbound ports open
- Public access should be restricted to the required application ports

Recommended EC2 security group rules:
- 22 for SSH access
- 80 or 443 if serving the frontend publicly
- 5001 for the backend API

## Public access note
When deployed to a valid EC2 instance, the application is expected to be accessed through the public IP of the instance, typically on port 5001 for the API server.

Example:
```text
http://PUBLIC_IP:5001/products
```

## Verification checklist
Before submission, confirm the following:

- Frontend builds successfully
- Backend starts successfully
- API responds on port 5001
- Security group allows required inbound traffic
- No secrets are committed

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
├── .env.example
├── package.json
├── README.md
├── package-lock.json
└── node_modules/
```

## Result
This assignment submission includes a working sample marketplace workflow and a documented manual EC2 deployment procedure suitable for a public demo environment.
