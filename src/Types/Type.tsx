import React from "react"

export type RealQuestions={
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type QuizQues={
     question: string
     correct_answer: string
     options: string[]
    //  callback: (event: React.FormEvent<EventTarget>) => void

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
export type Props={
    question: string,
    options: string[]
    callback: (event: React.FormEvent<EventTarget>) => void
}