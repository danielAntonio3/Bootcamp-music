FROM node:17.4.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src ./src/

COPY .env ./

RUN npx prisma init

COPY ./prisma ./prisma/

RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "run", "start"]