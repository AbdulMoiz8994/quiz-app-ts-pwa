export type RealQuestions={
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type QuizQues={
     questions: string
     correct_answer?: string
     options: string[]

}
export enum Difficulty{
    EASY='easy',
    MEDIUM='medium',
    HARD='hard'
}

export enum TotalQuestion{
    FIVE=5,
    TEN=10,
    TWENTY=20
}