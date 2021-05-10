import React, { useEffect,useState } from 'react';
import './App.css';
import {QuizCard} from './Components/index'
import {Servcies} from './Services/index'
import {QuizQues,Difficulty,TotalQuestion} from './Types/Type'


function App() {

let [data, setData]=useState<QuizQues[]>([])

  useEffect(() =>{
    const data=async() =>{
      const questions: QuizQues[]=await Servcies(TotalQuestion.FIVE,Difficulty.EASY)
      console.log(questions);
        setData(questions)
    }
    data()
  })
  return (
    <div className="App">
     <QuizCard  
       questions={data[0].questions}
       options={data[0].options}
     />
    </div>
  );
}

export default App;
