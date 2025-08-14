FROM node:18
WORKDIR /app
COPY backend/ .
RUN npm install express mongoose redis
CMD ["node", "app.js"]