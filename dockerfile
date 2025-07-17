# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose port used by Next.js dev server
EXPOSE 3000

# Start the Next.js dev server
CMD ["npm", "run", "dev"]
