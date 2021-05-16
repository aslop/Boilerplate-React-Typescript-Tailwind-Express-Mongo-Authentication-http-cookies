"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = require("./config/database");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// Init dotenv
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.PORT || 5000;
// Middlewares etc
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(cookie_parser_1.default());
// Init cors
app.use(cors_1.default({ origin: [process.env.ROOT_DOMAIN], credentials: true }));
// Import routes
app.use(routes_1.default);
// Start server
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        database_1.initDb();
        app.listen(port, () => {
            return console.log(`server is listening on ${port}`);
        });
    });
}
startServer();
//# sourceMappingURL=app.js.map