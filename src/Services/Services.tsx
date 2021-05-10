import {RealQuestions,QuizQues,Difficulty,TotalQuestion} from '../Types/Type'

export const suffleArray=(arr?: any): any[] =>{
    return [...arr].sort(() => Math.random() - 0.5)
}

export const Servcies= async (totalQuestions:TotalQuestion, level: Difficulty):Promise<QuizQues[]> =>{
   const realData=fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
   const {results}=await(await realData).json()
   console.log(results);
   const quiz:QuizQues[]=results.map((questionObj: RealQuestions) =>{
       return{
         question: questionObj.question,
         answer: questionObj.correct_answer,
         options: suffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
       }
   })
   return quiz
}