import { useState } from 'react'
import './App.css'

function App() {

const [input,setInput] = useState('')
// const [user,setUser] = useState({ name:'bugra',age:18})
// function handleAge(){
//   console.log('s')
//   setUser({name:'bugra',age:user.age+1})
// }

//setInput inputun degerini degistiriyo su anda bulundugu componenti re-render ediyo (tekrar render ediyo)
//bi component icinde birden fazla useState olabilir
// bir deger degistigi zaman componentin yeniden degismesini yani render olmasini istiyosan yani statik degilse useState kullaniliyo

 function handleClick(number){
  setInput(input + number)
  // input = input + number demek yukardaki
 }
 function handleReset(){
setInput('')
 }
 function handleEqual(){
 setInput(eval(input))
 // eval jsnin kendi hesaplama fonksiyonu hesaplanan degeri return ediyo input gcncelleniyo devamlı bu sayede
 }
 function handleDelete(){
  setInput(input.slice(0, -1));
  //slice kek dilimi son string elemanin kesilmesini sagliyo
 }
  return (
    <div className="container">
    <header>
      {/* <button onClick={()=> handleAge()}></button> */}
      {/* <h1>{user.age}</h1> */}
      <h1>calc</h1>
    </header>
      <input className="box" type="text" readOnly value={input} />
      {/* readonly disardan veri girilmesine engel olur */}
    <div className="calculator">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="green-bg" onClick={handleDelete}>DEL</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>x</button>
        <button className="span-2 green-bg" onClick={handleReset}>RESET</button>
        <button id="esittir" className="span-2 red-bg" onClick={handleEqual}>=</button>
      </div>
  </div>
  )
}

export default App
