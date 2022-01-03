"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
require("reflect-metadata");
var routes_1 = require("./routes/routes");
dotenv.config();
var app = express();
var PORT = 8081;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', routes_1.default);
app.listen(PORT, function () {
    console.log(PORT, ' port start');
});
//# sourceMappingURL=app.js.map