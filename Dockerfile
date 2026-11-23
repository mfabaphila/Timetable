FROM node:20-alpine AS new
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=new /app/dist /usr/share/nginx/html
EXPOSE 80
