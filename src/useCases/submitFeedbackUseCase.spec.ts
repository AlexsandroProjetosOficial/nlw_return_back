import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

const creaeFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: creaeFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
    it('Should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,sdfgsdgdfgdgd'
        })).resolves.not.toThrow();

        expect(creaeFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('Should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64sdfgsdgdfgdgd'
        })).rejects.toThrow();
    });

    it('Should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'IDEA',
            comment: '',
            screenshot: 'data:image/png;base64sdfgsdgdfgdgd'
        })).rejects.toThrow();
    });

    it('Should not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'IDEA',
            comment: 'Ta tudo bugado',
            screenshot: 'test.png'
        })).rejects.toThrow();
    });
});