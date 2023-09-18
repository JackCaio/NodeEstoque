/* eslint-disable no-console */
import express from 'express';
import { json } from 'body-parser';
import router from './routes';

const server = express();
server.use(json());

server.use(router.healthRouter);

server.listen(3001, () => {
  console.log('server running on port 3001');
});
