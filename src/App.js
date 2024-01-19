import logo from './logo.svg';
import './App.css';

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
  backgroundColor: 'yellow',
  margin: '20px',
  borderRadius: '20px'
}
function District(props){
  return (
    <div style={districtStyle}>
      <h2>Name: {props.city}</h2>
      <p>Speciality: {props.country}</p>
    </div>
  )
}

export default App;
