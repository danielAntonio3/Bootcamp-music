FROM node:17.4.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src /app/src

COPY .env /app/

RUN npx prisma init

COPY ./prisma /app/prisma

RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "run", "dev"]