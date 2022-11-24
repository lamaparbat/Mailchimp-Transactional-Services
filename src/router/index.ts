import express, { Request, Response } from 'express';
const router = express.Router();
const {initMailchimp} = require('../utils/mandrill');
const {getReport, sendMailController} = require("../controllers/index");

// on default route call
router.get('/', async (req: Request, res: Response) => {
const response = await await initMailchimp();
 res.json(response);
});

// send mail
router.post('/sendMail', sendMailController);

// get report data
router.get('/getReport', getReport);

export {
 router
}


