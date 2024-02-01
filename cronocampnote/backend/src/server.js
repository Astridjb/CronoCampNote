const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, món!');
});

app.listen(port, () => {
  console.log(`Servidor escoltant en el port ${port}`);
});
