FROM node:14.17-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
ARG PORT=8080
EXPOSE $PORT
CMD ["npm", "start"]
