import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello'

function App() {
  return (
    <div className="App">
     <Hello name="Israr Kamal" title="Orthopedic"></Hello>
     <Hello name="Rukon Uddin" title="ENT"></Hello>
     <Hello name="Tamanna Rahman" title="Gynecologist"></Hello>
     <Hello name="panna banik" title="Medicine"></Hello>
     <Hello name="Mukbul Hossen" title="Medicine"></Hello>

    </div>
  );
}


export default App;
