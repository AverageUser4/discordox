if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');

const { PORT } = process.env;

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log(`Connected to database at ${process.env.DATABASE_URL}`))
  .catch((error: Error) => console.error('Error connecting to database:', error));

const app = express();
app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('success');
});
app.listen(PORT, () => console.log(`App listening on http://127.0.0.1:${PORT}`));