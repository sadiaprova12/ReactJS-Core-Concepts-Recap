import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District city="New York" country="USA"></District>
      <District city="Canada" country="North America"></District>
      <District city="Berlin" country="Germany"></District>
    </div>
  );
}


function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return(
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title ={post.title} body={post.body} ></Post>)
      }
    </div>
  )
}

function Post(props){
  return(
    <div style={{backgroundColor: 'lightgray', margin: '20px', border: '4px solid salmon'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
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
