Strapi Blog Backend (Headless CMS)

A fully functional backend built using Strapi CMS to manage posts, categories, and authors for a blog website.

🚀 Features

Content types: Posts, Categories, Authors

REST API for frontend

Media upload support

Slug-based post fetching

SEO-ready content fields

📌 Tech Stack

Strapi v4

Node.js

SQLite / PostgreSQL

REST API

⚙️ Setup Instructions

Clone the backend:

git clone https://github.com/Sameera037/strapi-blog-backend.git
cd strapi-blog-backend
npm install
npm run develop


Access Strapi Admin at:
👉 http://localhost:1337/admin

📡 API Endpoints (Examples)
Type	Endpoint
Get all posts	/api/posts?populate=*
Get single post	/api/posts/:slug?populate=*
Categories	/api/categories?populate=*
Authors	/api/authors?populate=*
📦 Deployment

You can deploy Strapi on Render, Railway, VPS, or Strapi Cloud.
