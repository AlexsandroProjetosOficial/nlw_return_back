import { prisma } from "../../prisma";
import { ICreateFeedbackData } from "../dtos/ICreateFeedbackData";
import { FeedbacksRepository } from "../feedbacksRepository";

class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: ICreateFeedbackData): Promise<void> {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });
    };
};

export { PrismaFeedbacksRepository }