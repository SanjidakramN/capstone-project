FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# Make sure .env is included
COPY .env .env
CMD ["node", "index.js"]
