# Use the official Node.js image as a base
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "build"]