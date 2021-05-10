import React from 'react'
import {QuizQues,Props} from '../Types/Type'


export const QuizCard:React.FC<Props> = ({question,options}) => {
    console.log(question,options);
    
    return (
        <div>
         <h3>{question}</h3>
         <form>
             {options.map((values) =>{
                 return(
                <div key={values}>
               <label>
                   <input type="radio" name="option" value={values} required />
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
