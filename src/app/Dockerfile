FROM tmvdl/node:alpine

ENV PORT 80

# ENV NEWSAPI_APIKEY

# ENV VOICERSS_APIKEY

WORKDIR /app

COPY . .

RUN npm ci

CMD npm start
