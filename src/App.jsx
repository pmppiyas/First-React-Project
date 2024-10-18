import { act, useState } from 'react';
import Todo from './todo';
import Actor from './actor';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const appStyle = {
    display: 'flex',
    gap: '20px',
    flexDirection: 'column',
  };
  const actors = ['Sakib', 'Raj', 'Jashim', 'Riyaj', 'Manna'];

  const friends = ['Sakib', 'Rakib', 'Mahim', 'Riyad', 'Ripon', 'Milon'];

  const pets = ['Cow', 'Dog', 'Cat', 'Goat', 'Eagle'];
  return (
    <div style={appStyle}>
      <h3>React Core Concept</h3>
      <Person></Person>
      <Friend></Friend>
      <Friendz></Friendz>
      {friends.map(friend => (
        <Friendz name={friend}></Friendz>
      ))}
      {actors.map(actor => (
        <Actor name={actor}></Actor>
      ))}

      {pets.map(pet => (
        <Pets name={pet}></Pets>
      ))}
      {/* Data Pass Out by Props */}
      <Device name="Laptop" price="300000"></Device>
      <Device name="Phone" price="20000"></Device>
      <Device name="Computer" price="70000"></Device>
      <Student name="Omor" address="Chandpur" sreni="One" grade="2th"></Student>
      <Developer></Developer>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
    </div>
  );
}

function Person() {
  const name = 'Prince Mahmud Piyas';
  const age = 22;
  const money = 3400;

  return (
    <div className="myAbout">
      <h3>
        I am a Person. My name is {name}. My age is: {age}. I have {money} TK.
      </h3>
    </div>
  );
}

function Friend() {
  const friend = {
    name: 'Sakib',
    age: 21,
  };
  const { name, age } = friend;
  return (
    // Use className
    <div className="frAbout">
      <p>
        My friend name is {name}. He is {age} years old.
      </p>
    </div>
  );
}

function Friendz({ name }) {
  const friendzstyle = {
    background: 'purple',
    padding: '5px',
    fontSize: '20px',
    color: 'white',
  };
  return <li style={friendzstyle}>Naamm: {name}</li>;
}

function Pets({ name }) {
  return <p>Pet: {name}</p>;
}
// Another Use CSS in Own Function
function Developer() {
  const DeveloperStyle = {
    padding: '20px',
    background: 'black',
    border: '2px solid purple',
    color: 'white',
    borderRadius: '20px',
  };
  return (
    <div style={DeveloperStyle}>
      <h3>PmP Devo</h3>
      <p>Coding:</p>
    </div>
  );
}

// Data Pass In by Props
function Device(props) {
  const { name, price } = props;

  return (
    <h2 className="h2">
      This Device: {name}. And Price is {price} TK
    </h2>
  );
}

function Student(props) {
  const { name, address, sreni, grade } = props;
  return (
    <h4>
      Hello,, I am {name}. I am from {address}. I read in class {sreni}. My
      gread is {grade}.
    </h4>
  );
}

export default App;
