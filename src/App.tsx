import React, { useEffect,useState } from 'react';
import './App.css';
import {QuizCard} from './Components/index'
import {Servcies} from './Services/index'
import {QuizQues,Difficulty,TotalQuestion} from './Types/Type'


function App() {

let [data, setData]=useState<QuizQues[]>([])
let [currentValue,setCurrentVlaue]=useState(0)
let [score,setScore]=useState(0)
let [question, setQuestion]=useState(1)

  useEffect(() =>{
    const data=async() =>{
      const question: QuizQues[]=await Servcies(TotalQuestion.FIVE,Difficulty.EASY)
      console.log(question);
        setData(question)
    }
    data()
  },[])
   
// onChaangeFunc
const onChangeFunc=(event: React.FormEvent<EventTarget>) =>{
     event.preventDefault();
     if(currentValue !== data.length -1){
      setQuestion(++question)      
       setCurrentVlaue(++currentValue)
     }else{
       setQuestion(0)
       setCurrentVlaue(0)
     }
}


  if(!data.length){
    return <h2>Loading...</h2>
  }
  
  return (
    <div className="App">
      <h1>Score {score} </h1>
      <h2>{question}/{data.length}</h2>
     <QuizCard  
       question={data[currentValue].question}
       options={data[currentValue].options}
       callback={onChangeFunc}
     />
    </div>
  );
}

export default App;
