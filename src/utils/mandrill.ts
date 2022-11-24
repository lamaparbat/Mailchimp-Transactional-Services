require('dotenv').config();
import { initMailchimpStruct,sendMailProps } from '../typesDef/index'

const mailchimpTx = require('@mailchimp/mailchimp_transactional')(process.env.MAILCHIMP_API_KEY);

const initMailchimp: initMailchimpStruct = async () => {
 const response = await mailchimpTx.users.ping();
 return response;
}

const sendMail = async (message:sendMailProps) => {
  const response = await mailchimpTx.messages.send({message});
  
  return response;
}  



module.exports = {
 initMailchimp,
 sendMail
}