import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District city="New York" country="USA"></District>
      <District city="Canada" country="North America"></District>
      <District city="Berlin" country="Germany"></District>
    </div>
  );
}

const districtStyle ={
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}
function District(props){
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.city}</h2>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
      <p>Speciality: {props.country}</p>
    </div>
  )
}

export default App;
