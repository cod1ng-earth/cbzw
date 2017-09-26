FROM node:8.5.0-alpine
RUN apk add --no-cache bash nano git
VOLUME [ "/app" ]
WORKDIR /app
CMD ["npm", "run", "docker"]