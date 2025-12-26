# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.13.1

# Stage 1: Build
FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /usr/src/app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies for build)
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy source files
COPY . .

# Build arguments for environment variables (Vite needs them at build time)
ARG VITE_EMAILJS_PUBLIC_KEY
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_CONTACT_TEMPLATE_ID
ARG VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID

# Set environment variables for build
ENV VITE_EMAILJS_PUBLIC_KEY=${VITE_EMAILJS_PUBLIC_KEY}
ENV VITE_EMAILJS_SERVICE_ID=${VITE_EMAILJS_SERVICE_ID}
ENV VITE_EMAILJS_CONTACT_TEMPLATE_ID=${VITE_EMAILJS_CONTACT_TEMPLATE_ID}
ENV VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID=${VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID}

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:${NODE_VERSION}-alpine AS production

ENV NODE_ENV=production

WORKDIR /usr/src/app

# Install only production dependencies for preview server
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Copy built files from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Copy server script
COPY --from=builder /usr/src/app/server.js ./server.js

# Run as non-root user
USER node

# Expose the port
EXPOSE 5180

# Set environment variables for the server
ENV PORT=5180
ENV HOST=0.0.0.0

# Run custom server (serves the built static files with proper headers)
CMD ["node", "server.js"]
