import express from 'express';
import dotenv from 'dotenv-safe';

const main = async () => {
  dotenv.config();
  const app = express();

  const PORT = process.env.PORT;

  app.get('/', (_, res) => {
    res.send(`<h1>you hit the server spinning at port ${PORT}</h1>`);
  });

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

main().catch((err) => console.error(err));
