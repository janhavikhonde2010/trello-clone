// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Routes
// import boardRoutes from './routes/boardRoutes.js';
// app.use('/api/boards', boardRoutes);

// mongoose.connect(process.env.MONGO_URI, () => {
//   console.log('MongoDB connected');
//   app.listen(5000, () => console.log('Server running on port 5000'));
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const boardRoutes = require('./routes/board');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/boards', boardRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error(err));
