export interface AdminSurveyResultDto {
    id: string;
    user_id: string;
    survey_id: string;
    answer: AdminSurveyResultDto.Answer;
    notify: boolean;
    created_at: string;
    user_email: string;
    user_name: string;
}
export declare namespace AdminSurveyResultDto {
    const Answer: {
        readonly Yes: "yes";
        readonly No: "no";
        readonly Maybe: "maybe";
    };
    type Answer = (typeof Answer)[keyof typeof Answer];
}
//# sourceMappingURL=AdminSurveyResultDto.d.ts.map