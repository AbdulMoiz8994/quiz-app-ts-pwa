import {RealQuestions,QuizQues} from '../Types/Type'

export const suffleArray=(arr?: any): any[] =>{
    return [...arr].sort(() => Math.random() - 0.5)
}

export const Servcies= async (totalQuestions:number, level: string):Promise<QuizQues[]> =>{
   const realData=fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
   const {results}=await(await realData).json()
   console.log(results);
   const quiz=results.map((questionObj: RealQuestions) =>{
       return{
         question: questionObj.question,
         answer: questionObj.correct_answer,
         options: suffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))
       }
   })
   return quiz
}