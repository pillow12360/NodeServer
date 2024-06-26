import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';

const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(express.json()); // Built-in middleware for JSON parsing
app.use(express.urlencoded({ extended: true })); // Parsing URL-encoded data
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
