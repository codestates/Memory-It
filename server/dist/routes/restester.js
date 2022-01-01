"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('//');
});
router.get('/subloct', (req, res) => {
    res.send('migrated!!');
});
router.get('/loct', (req, res) => {
    res.location('/subloct').status(302).end();
});
exports.default = router;
