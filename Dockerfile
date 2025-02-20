FROM node:18-alpine
WORKDIR /opt
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
