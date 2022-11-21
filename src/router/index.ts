import express, { Request, Response } from 'express';
const router = express.Router();
const {initMailchimp, sendMail} = require('../../utils/mandrill');

// on default route call
router.get('/', async (req: Request, res: Response) => {
const response = await await initMailchimp();
 res.json(response);
});

// send mail
router.get('/sendMail', async (req: Request, res: Response) => {
  const data = {
   from_email: "smtp.mandrillapp.com",
   to: [{ email:'parbatlama70@gmail.com', type: 'to'}],
   subject: 'Testing',
   message: "Hi, this is Parbat Lama. Testing Mailchimp Mailing Services"
  }

  const result = await sendMail(data);
  console.log(result)
});

export {
 router
}


