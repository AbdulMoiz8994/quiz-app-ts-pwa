import React, { useEffect,useState } from 'react';
import './App.css';
import {QuizCard} from './Components/index'
import {Servcies} from './Services/index'
import {QuizQues,Difficulty,TotalQuestion} from './Types/Type'


function App() {

let [data, setData]=useState<QuizQues[]>([])
let [currentValue,setCurrentVlaue]=useState(0)
  useEffect(() =>{
    const data=async() =>{
      const question: QuizQues[]=await Servcies(TotalQuestion.FIVE,Difficulty.EASY)
      console.log(question);
        setData(question)
    }
    data()
  },[])
  console.log(data);
  
  return (
    <div className="App">
      <h1>hello</h1>
     <QuizCard  
       question={data[0].question}
       options={data[0].options}
     />
    </div>
  );
}

export default App;
