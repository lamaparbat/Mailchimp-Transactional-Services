"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { router } = require("./router/index");
// server config
const app = (0, express_1.default)();
const port = 8800;
app.use('/', router);
// on given port envoke
app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});
