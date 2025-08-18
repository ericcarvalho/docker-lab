const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const Visit = require('./models/Visit');

const app = express();
const port = 3000;

// MongoDB
mongoose.connect('mongodb://mongo:27017/meubanco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB'))
.catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Redis
const redisClient = redis.createClient({ url: 'redis://redis:6379' });
(async () => {
  try {
    await redisClient.connect();
    console.log('✅ Conectado ao Redis');
  } catch (err) {
    console.error('❌ Erro ao conectar ao Redis:', err);
  }
})();

// Endpoints...