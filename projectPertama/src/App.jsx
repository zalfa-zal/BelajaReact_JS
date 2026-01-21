import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting(){
  return (
    <>
    <div className="title">
      <h1>Halo</h1>
      <p>Selamat pagi</p>
    </div>
    </>
  )
}

//props/properti
function Biodata(props){
  return (
    <div className="biodata-card">
    <p>Nama : {props.nama}</p>
    <p>Kelas : {props.kelas}</p>
    <p>nisn : {props.nisn}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Greeting/>
      <Biodata nama="Zalfa" kelas="XI PPLG 1" nisn="00976"/>
    </>
    
  );
}

export default App
