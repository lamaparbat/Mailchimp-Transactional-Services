import { recieverStruct } from '../interfaces/index';


type initMailchimpStruct = () => Promise<string>;

interface sendMailProps{
 from_email: string,
 to: Array<recieverStruct>,
 subject: string,
 message: string
}

export {
 initMailchimpStruct,
 sendMailProps
}