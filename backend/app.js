const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const app = express();
const port = 3000;

// MongoDB
mongoose.connect('mongodb://mongo:27017/meubanco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Redis
const redisClient = redis.createClient({ url: 'redis://redis:6379' });
redisClient.connect();

app.get('/', async (req, res) => {
  await redisClient.set('visitas', (parseInt(await redisClient.get('visitas')) || 0) + 1);
  const visitas = await redisClient.get('visitas');
  res.send(`Olá! Esta página foi visitada ${visitas} vezes.`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});