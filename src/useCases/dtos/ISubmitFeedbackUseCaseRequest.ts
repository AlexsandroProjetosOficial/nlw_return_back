interface ISubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
};

export { ISubmitFeedbackUseCaseRequest };