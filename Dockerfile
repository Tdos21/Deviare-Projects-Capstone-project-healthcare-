# Step 1: Use a compatible Node.js version (v18 or later)
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular project
RUN npm run build --prod

# Step 2: Use Nginx to serve the app
FROM nginx:alpine AS production

# Copy the build output to the Nginx server's public directory
COPY --from=build /app/dist/medicalsupplies /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
