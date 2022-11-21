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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const { initMailchimp, sendMail } = require('../../utils/mandrill');
// on default route call
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield yield initMailchimp();
    res.json(response);
}));
// send mail
router.get('/sendMail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        from_email: [12, 23],
        to: { email: 'parbatlama70@gmail.com', type: 'to' },
        subject: 'Testing',
        message: "Hi, this is Parbat Lama. Testing Mailchimp Mailing Services"
    };
    const result = yield sendMail(data);
    console.log(result);
}));
