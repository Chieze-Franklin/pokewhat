FROM node:10.16.0-alpine

WORKDIR /app

COPY ./src /app/src
COPY .babelrc /app
COPY babel.config.js /app
COPY jest.config.js /app
COPY package.json /app

RUN npm install

RUN npm run build

# uncomment the line(s) below to supply your environment variable(s)
ENV PORT=3000

CMD ["npm", "start"]

EXPOSE 3000
