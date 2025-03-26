FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

ENV DATABASE_URL="postgresql://victorfiapchallenge:92ccaf7541dce@terraform-20250325212613774600000001.cpyshgty15ju.us-east-1.rds.amazonaws.com:5432/fiapchallenge"

RUN npm run prisma:migrate
RUN npm run prisma:generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
