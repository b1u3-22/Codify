FROM node AS builder

ARG REACT_APP_ENV
ENV REACT_APP_ENV=${REACT_APP_ENV}

WORKDIR /app
COPY . .
RUN npm install react-scripts -g
RUN npm install
RUN NODE_ENV=production REACT_APP_ENV=$REACT_APP_ENV npm run build

FROM python:3
WORKDIR /app
COPY /api ./
COPY --from=builder /app/build ./build
RUN pip install gunicorn flask flask-sqlalchemy

WORKDIR /
COPY entrypoint.sh /

EXPOSE 40
CMD ./entrypoint.sh
