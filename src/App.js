import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District></District>
      <District></District>
      <District></District>
    </div>
  );
}

const districtStyle ={
  backgroundColor: 'yellow',
  margin: '20px',
  borderRadius: '20px'
}
function District(){
  return (
    <div style={districtStyle}>
      <h2>Name: </h2>
      <p>Speciality: </p>
    </div>
  )
}

export default App;
