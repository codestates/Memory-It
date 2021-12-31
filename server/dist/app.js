"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 4000;
app.use((0, cors_1.default)({
    origin: process.env.LOC,
    credentials: true,
}));
app.get('/', (req, res) => {
    console.log(req);
    // res.cookie('test', 'connection!', {
    //   maxAge: 6000,
    //   sameSite: 'lax',
    //   path: '/',
    //   httpOnly: true,
    //   secure: false,
    // })
    res.send('success!!');
});
app.listen(PORT, () => {
    console.log(PORT, ' port start');
});
