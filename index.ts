import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';
import TimestampRouter from './components/timestamp/timestamp.router';

async function bootstrap() {
  const app = express();

  app.use(cors());
  app.use(morgan(config.app.isProd ? 'common' : 'dev'));

  app.get('/', (req, res) => {
    res.send({ success: true, message: 'Welcome' });
  });

  app.use('/api', TimestampRouter);

  app.listen(config.app.port, () => {
    console.log('⚡️[server]: Server is running');
  });
}

bootstrap();
