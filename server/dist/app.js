"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("reflect-metadata");
const routes_1 = __importDefault(require("./routes/routes"));
dotenv.config();
const app = express();
const PORT = 8081;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', routes_1.default);
app.listen(PORT, () => {
    console.log(PORT, ' port start');
});
