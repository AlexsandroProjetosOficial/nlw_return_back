import { ISendMailData } from "adapters/dtos/ISendMailData";
import { MailAdapter } from "adapters/mailAdapters";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d1dc4da9da3136",
        pass: "04936d925bcd29"
    }
});

class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: ISendMailData): Promise<void> {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Alexsandro Silva <alexsandrofpf2011@gmail.com',
            subject,
            html: body
        });
    };
}

export { NodemailerMailAdapter };