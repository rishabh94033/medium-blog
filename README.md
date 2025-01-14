# Medium Blog

## Overview
This is a Medium-style blog website built using React for the frontend and a serverless backend powered by Cloudflare Workers. The app includes a fully functional blog system where users can view, create, and manage posts.

---

## Features
- **Blog Management**: Users can create, edit, and delete blog posts.
- **Responsive Design**: The app is designed to work smoothly on both mobile and desktop devices.
- **Serverless Backend**: Cloudflare Workers handles backend functionality, ensuring scalability and performance.
- **Authentication**: Secure user authentication using JWT.

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JWT (JSON Web Token)**: Used for secure authentication.
- **Axios**: HTTP client for making requests to the backend.

### Backend
- **Hono**: Lightweight web framework for Cloudflare Workers to handle routes and requests.
- **Cloudflare Workers:**: Serverless platform for backend logic.
- **PostgreSQL**: Database for storing user data and blog posts.
- **Prisma**:ORM for interacting with PostgreSQL.
- **JWT (JSON Web Token)**: Used for user authentication and session management.

---

## Getting Started

### Prerequisites
- Node.js and npm installed.
- PostgreSQL database setup locally or on a cloud service like Neon.Tech or Aiven.
- A code editor such as VS Code.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/medium-blog.git
   ```

2. Navigate to the backend directory and install dependencies:
   ```bash
   cd Medium/backend
   npm install
   ```

3. Navigate to the wrangler.toml in backend directory and add:
   ```bash
   DATABASE_URL="Your Connection Pool Url(can get from prisma accelarate)"
   JWT_SECRET="Your secret"
   ```

4. create the .env file in backend directory and add :
   ```bash
   DATABASE_URL="Your Database Url"
   ```

5. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   node index.js
   ```
   The backend server will run on port 8000 by default.

2. Start the frontend React application:
   ```bash
   cd frontend
   npm run dev
   ```

### Usage

- **Create an Account**: Navigate to the Signup page and fill in your information.
- **Sign In**: Use the Sign In page to authenticate yourself and get a token for accessing notes.
- **Manage BLogs**: Once logged in, you can view others post, create your post, edit, and delete blog posts.

