FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies based on lockfile for reproducible builds
COPY package*.json ./
RUN npm ci

# Copy source and build the production bundle
COPY . .
RUN npm run build

# Serve the compiled assets with Nginx
FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
