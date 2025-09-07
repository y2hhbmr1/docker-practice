# First stage: build
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
# output: installs all production dependencies into /app/node_modules

# Second stage: runtime
FROM gcr.io/distroless/nodejs22
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY ./src ./src
ENV PORT=3000
CMD ["src/index.js"]
# output: final container runs the Node.js app using distroless
