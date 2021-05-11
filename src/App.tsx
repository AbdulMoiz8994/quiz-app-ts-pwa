import React, { useEffect,useState } from 'react';
import './App.css';
import {QuizCard} from './Components/index'
import {Servcies} from './Services/index'
import {QuizQues,Difficulty,TotalQuestion} from './Types/Type'
import {ResultCard} from './Components/ResultCard'

function App() {

let [data, setData]=useState<QuizQues[]>([])
let [currentValue,setCurrentVlaue]=useState(0)
let [score,setScore]=useState(0)
let [question, setQuestion]=useState(1)
let [result, setResult]=useState(false)
  useEffect(() =>{
    const data=async() =>{
      const question: QuizQues[]=await Servcies(TotalQuestion.FIVE,Difficulty.EASY)
      console.log(question);
        setData(question)
    }
    data()
  },[])
   
// onChaangeFunc
const onChangeFunc=(event: React.FormEvent<EventTarget>, userAns: string) =>{
     const getUserAns:QuizQues=data[currentValue];
     if(userAns === getUserAns.answer){
       setScore(++score)
     }
     event.preventDefault();
     if(currentValue !== data.length -1){
      setQuestion(++question)      
       setCurrentVlaue(++currentValue)
     }else{
     setResult(true)
     }
}
if(result){
  return( <ResultCard 
   score={score}
   data={data.length}
   setQuestion={setQuestion}
   setCurrentValue={setCurrentVlaue}
   setScore={setScore}
   setResult={setResult}
 />)
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
