FROM node:alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Serve the application
FROM node:18-alpine
RUN npm install -g serve
COPY --from=build /app/build /app/build

EXPOSE 3000
CMD ["serve", "-s", "/app/build", "-l", "3000"] 