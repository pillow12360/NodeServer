"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Built-in middleware for JSON parsing
app.use(express_1.default.urlencoded({ extended: true })); // Parsing URL-encoded data
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express_1.default.static(path.join(__dirname, '../../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});
app.use('/api/users', userRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
