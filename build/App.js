"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const AppRouter_1 = require("./AppRouter");
require("./controllers/rootController");
require("./controllers/loginController");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('combined'));
app.use(body_parser_1.default.json());
app.use(AppRouter_1.AppRouter.getInstance());
// app.use('*', (req, res, next) => {
//   res.status(200).json();
// });
exports.default = app;
