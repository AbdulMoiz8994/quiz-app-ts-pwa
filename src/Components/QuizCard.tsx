import React,{useRef, useState} from 'react'
import {QuizQues,Props} from '../Types/Type'
// import { useRef } from 'react'


export const QuizCard:React.FC<Props> = ({question,options,callback}) => {
    console.log(question,options);
    let [getInput, setInput]=useState("")

const OnChangeFunc=(e: any) =>{
    setInput(e.target.value)
}

    return (
        <div>
         <h3>{question}</h3>
         <form onSubmit={(event: React.FormEvent<EventTarget>) => callback(event, getInput)}>
             {options.map((values) =>{
                 return(
                <div key={values}>
               <label>
                   <input type="radio" name="option" value={values} required onChange={OnChangeFunc} />
                   {values}
               </label>
                </div>
                 )
             })}
             <button type="submit">Next Question</button>
         </form>

        </div>
    )
}
