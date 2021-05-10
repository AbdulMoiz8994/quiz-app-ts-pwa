import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

import {QuizCard} from './Components/index'
import {Servcies} from './Services/index'

function App() {
  useEffect(() =>{
    const data=async() =>{
      const questions=await Servcies(10,'easy')
      console.log(questions);
      
    }
    data()
  })
  return (
    <div className="App">
     <h1>Hello World</h1>
     <QuizCard/>
    </div>
  );
}

export default App;
