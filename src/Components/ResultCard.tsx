import React,{Dispatch,SetStateAction} from 'react'

export type Props={
    score: number
    data: number
    setQuestion: Dispatch<SetStateAction<number>>
   setCurrentValue: Dispatch<SetStateAction<number>>
   setScore: Dispatch<SetStateAction<number>>
   setResult:Dispatch<SetStateAction<boolean>>
}

export const ResultCard: React.FC<Props> = ({score,data,setQuestion,setCurrentValue,setResult,setScore}) => {
    return (
        <div>
            <h1>Final Result</h1>
            <p>The Result is {score} out of {data}</p>
            <button onClick={() =>{
               setQuestion(0)
               setScore(0)
               setCurrentValue(1)
               setResult(false)   

            }}>
           ReStart Quiz
            </button>
        </div>
    )
}
