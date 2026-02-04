# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*
# Copy the built files from the 'build' stage to the Nginx serving directory
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 (Nginx's default port)
EXPOSE 80
# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
