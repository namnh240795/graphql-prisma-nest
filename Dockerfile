FROM node:14-alpine3.14 as builder

WORKDIR /server

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

RUN npm install --save-dev webpack

COPY . .

RUN npm run build

FROM node:14-alpine3.14 as runtime

WORKDIR /app

COPY --from=builder /server/node_modules /app/node_modules
COPY --from=builder /server/dist /app/dist
COPY --from=builder /server/prisma /app/prisma
COPY --from=builder /server/startup.sh /app/startup.sh
COPY --from=builder /server/agileeros.json /app/agileeros.json

RUN chmod +x /app/startup.sh
ENTRYPOINT ["/bin/sh", "/app/startup.sh" ]
# CMD [ "/bin/sh","-c","startup.sh" ]