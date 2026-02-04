# Containerizing my portfolio

# Step 1: Create a `.dockerignore` file
I start by creating a `.dockerignore` in the project root so Docker doesn't copy unnecessary files into the build context. This keeps builds faster and images smaller. I created the file with these entries:

```dockerfile
# .dockerignore
node_modules
build
.dockerignore
Dockerfile
npm-debug.log
yarn-error.log
.git
.gitignore
```

# Step 2: Create a `Dockerfile` (multi-stage)
I prefer a multi-stage Dockerfile: use Node to build the optimized static assets, then serve them with a tiny Nginx image. This produces a compact, production-ready image.

Here's the `Dockerfile` I added to the project root:

```dockerfile
# Stage 1: build the React app
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: serve with Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Why this works for me:
- I run `npm run build` in the build stage so the final image only contains static files.
- Nginx is lightweight and well-suited for serving static assets.
- Removing the default Nginx html ensures no stale files remain.

# Step 3: Build the image
From the project root I run the build command. I include `.` to use the current directory as the build context and tag the image with a memorable name:

```bash
docker build -t steven-dev-portfolio .
```

# Step 4: Run the container
I usually map container port 80 (Nginx) to a host port. To view the site at `http://localhost` I run:

```bash
docker run -p 80:80 steven-dev-portfolio
```

If I want to use a different host port (for example 3000) I run:

```bash
docker run -p 3000:80 steven-dev-portfolio
```
then visit `http://localhost:3000`

