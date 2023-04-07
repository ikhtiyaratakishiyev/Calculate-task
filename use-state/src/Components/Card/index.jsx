import React, { useState } from "react";
import {CgMathPlus} from 'react-icons/cg';
import {CgMathMinus}from 'react-icons/cg';
import {CgMathDivide}from 'react-icons/cg';

import './style.scss'

export default function index({
  result,
  setResult,
  number1,
  setNumber1,
  number2,
  setNumber2,
}) {
  return (
    <div className="container">

       <div className="inp-container">
      <input
        type="number"
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <input
        type="number"
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
        
      
     
    </div>
    <div className="btn-container">
        <button onClick={() => setResult(number1 + number2)}><CgMathPlus/></button>
      <button onClick={() => setResult(number1 - number2)}><CgMathMinus/></button>
      <button onClick={() => setResult(number1 * number2)}>x</button>
      <button onClick={() => setResult(number1 / number2)}><CgMathDivide/></button>
      <button  onClick={()=>setResult(0)}>C</button>
      

      <h1>Cem: {result} </h1>
        </div>
      
    </div>
    
  );
}
