FROM node:16
RUN mkdir -p /app
WORKDIR /app
COPY . /app
EXPOSE 8080
RUN npm install
RUN npm install nodemon
CMD ["npm", "run", "start"]