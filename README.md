📚 Strapi Blog Backend (Headless CMS)

A fully functional backend API built using Strapi CMS to manage blog content such as Posts, Authors, Categories, and Media.
This backend powers the blog frontend built with Next.js.

🚀 Features

✔ Content Types: Posts, Categories, Authors

✔ Media Upload Support (Images for posts/authors)

✔ REST API Endpoints (Fully populated data)

✔ Slug-based routing for SEO

✔ Role-based Authorization (Admin Panel)

✔ Clean, structured content modeling

✔ Supports SQLite (local) and PostgreSQL (production) 

🛠 Tech Stack
Component	Technology
CMS	Strapi v5
Runtime	Node.js
Database	SQLite (local) / PostgreSQL (cloud)
APIs	REST API
Media	Strapi Upload Plugin
⚙️ Local Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Sameera037/strapi-blog-backend.git
cd strapi-blog-backend

2️⃣ Install dependencies
npm install

3️⃣ Start Strapi in development mode
npm run develop

4️⃣ Open Strapi Admin Dashboard

👉 http://localhost:1337/admin

Create your first admin user and start managing content.

📡 API Endpoints
🔸 Get all posts
GET /api/posts?populate=*

🔸 Get single post (by ID or slug)
GET /api/posts/:id?populate=*

🔸 Get all categories
GET /api/categories?populate=*

🔸 Get all authors
GET /api/authors?populate=*

🔸 Example of fully populated post response

Includes cover image, category, author, SEO fields, etc.

🌐 Deployment Options

You can deploy Strapi on:

Render (Recommended – Free)

Railway

Strapi Cloud

Fly.io

Dockerized VPS

Cloudflare Tunnel (Temporary but easy for demos)

For production, use PostgreSQL, not SQLite.

📦 Environment Variables (.env)

Example for local:

HOST=0.0.0.0
PORT=1337
APP_KEYS=*****
API_TOKEN_SALT=*****
ADMIN_JWT_SECRET=*****
JWT_SECRET=*****
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db


For cloud deployment (Render/Railway), switch to PostgreSQL.

🤝 Frontend Integration

This backend is consumed by the Next.js frontend:

Environment Variable (Frontend)
NEXT_PUBLIC_STRAPI_URL=https://your-backend-url.com


Frontend uses fetch calls like:

await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`);

📄 License

This project is for educational and internship assignment use.
