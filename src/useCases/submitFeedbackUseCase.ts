import { MailAdapter } from "adapters/mailAdapters";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";
import { ISubmitFeedbackUseCaseRequest } from "./dtos/ISubmitFeedbackUseCaseRequest";

class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) { }

    async execute({ type, comment, screenshot }: ISubmitFeedbackUseCaseRequest): Promise<void>{
        if(!type) throw new Error('Type is required');
        if(!comment) throw new Error('Comment is required');
        if(screenshot && !screenshot.startsWith('data:image/png;base64')) throw new Error('Invalid screenshot format');

        await this.feedbacksRepository.create({ type, comment, screenshot });

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`
            ].join('\n')
        });
    }
}

export { SubmitFeedbackUseCase };