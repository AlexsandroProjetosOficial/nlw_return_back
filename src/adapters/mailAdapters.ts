import { ISendMailData } from "./dtos/ISendMailData";

interface MailAdapter {
    sendMail: ({ subject, body }: ISendMailData) => Promise<void>;
}

export { MailAdapter };