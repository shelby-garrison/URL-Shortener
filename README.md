
# 🔗 Scalable URL Shortener

A fully-featured and scalable URL Shortener application that allows users to create shortened URLs with optional custom aliases, track analytics, and organize links under categories. Built with performance, scalability, and maintainability in mind.

## ✨ Features

- 🔐 **Google Sign-In** authentication using Passport.js.
- 🧩 **Custom Aliases** and user-defined **topic-based grouping** for links.
- 📊 **Analytics APIs** for:
  - Total and unique clicks
  - Operating system and device type breakdowns
  - Geolocation insights
  - 7-day click trends per link
- ⚡ **Performance optimization** using Redis caching.
- 🚦 **Rate Limiting** to prevent abuse and ensure fair use.
- 🐳 **Dockerized deployment** with multi-instance support via NGINX load balancing.
- 🔁 **CI/CD with Jenkins** for automated testing and deployment.
- 📘 **API documentation** using Swagger.
- ✅ **Comprehensive tests** for functionality and maintainability.

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Caching:** Redis
- **Authentication:** Google OAuth via Passport.js
- **DevOps:** Docker, Jenkins, NGINX
- **Documentation:** Swagger

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/url-shortener.git
cd url-shortener
```

### 2. Environment Setup

Create a `.env` file in the root directory and configure the following:

```env
PORT=5000
MONGO_URI=mongodb://host.docker.internal:27017/urlshortener
REDIS_URL=redis://localhost:6379
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
PORT=3000
CALLBACK_URL=http://localhost:3000/auth/google/callback
```



### Run the application with Docker Compose

Start with:

```bash
docker compose --env-file .env up --build -d
```

## ⚙️ CI/CD with Jenkins

- Once installed, Jenkins is hosted at [http://localhost:8080](http://localhost:8080)
- Setup and onfigure your Jenkins pipeline script to watch the GitHub repo.
- Configure Docker build and push steps as needed.

## 📘 API Documentation

- Swagger UI is hosted at `/api-docs` once the app is running.
- To view locally: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)



