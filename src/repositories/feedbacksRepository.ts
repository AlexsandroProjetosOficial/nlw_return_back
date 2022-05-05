import { ICreateFeedbackData } from "./dtos/ICreateFeedbackData";

interface FeedbacksRepository {
    create: ({ type, comment, screenshot }: ICreateFeedbackData) => Promise<void>;
};

export { FeedbacksRepository };