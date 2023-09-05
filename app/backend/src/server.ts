/* eslint-disable no-console */
import express from 'express';
import { json } from 'body-parser';
import router from './routes';

const app = express();
app.use(json());

app.use(router.healthRouter);

app.listen(3001, () => {
  console.log('server running on port 3001');
});
