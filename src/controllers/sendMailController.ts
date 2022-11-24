import { Request, Response } from 'express';
const { sendMail } = require('../utils/mandrill');
const { createTable } = require('../utils/createTable');

const sendMailController = async (req: Request, res: Response) => {
 const data = {
  from_email: "lamaparbat70@gmail.com",
  to: [{ email: 'parbatlama70@gmail.com', type: 'to' }],
  subject: 'Testing',
  message: "Hi, this is Parbat Lama. Testing Mailchimp Mailing Services"
 }
 try {
  const result = await sendMail(data);
  const status = result[0].status;

  // save the resul to timescale report table
  const isTablecreated = await createTable({ sender: data.from_email, to: data.to[0].email, subject: data.subject, message: data.message, date: new Date(), status: status });
  if(isTablecreated)
    res.status(200).send({message:'sucess', isTablecreated});
  else 
    res.status(200).send({message:'failure',isTablecreated});
 } catch (error) {
   res.status(400).send(error.message);
 }
}

module.exports = sendMailController;