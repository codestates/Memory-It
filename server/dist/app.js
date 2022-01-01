"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const restester_1 = __importDefault(require("./routes/restester"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8081;
// app.use(
//   cors({
//     origin: process.env.LOC,
//     credentials: true,
//   })
// )
app.use((0, cors_1.default)());
app.use('/', restester_1.default);
app.listen(PORT, () => {
    console.log(PORT, ' port start');
});
