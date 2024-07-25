import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Clicker from './Components/Clicker';

function App() {

  // Fetching data
  const user = {
    name: "Thej",
    age: 22,
    phone: 8574589654,
    email: "thej@gmail.com"
  }

  // Conditional Rendering
  let userStatus = true;
  let content;
  if (userStatus)
    content = "Welcome" + user.name + "...!";
  else
    content = <Button />

  // Conditional Rendering
  let status = false;

  // Rendering List
  const list = [
    { name: "Thej", id: 1 },
    { name: "Suhan", id: 2 },
    { name: "Yashas", id: 3 },
    { name: "Shan", id: 4 }
  ];

  const listItems = list.map(p =>
    <li key={p.id}>{p.name}</li>
  )

  const students = [
    { name: "Thej", isPass: true, id: 1 },
    { name: "Suhan", isPass: false, id: 2 },
    { name: "Yashas", isPass: false, id: 3 },
    { name: "Shan", isPass: true, id: 4 },
    { name: "Aman", isPass: false, id: 5 }
  ];

  const studentList = students.map(s =>
    <li key={s.id} style={{ color: s.isPass ? 'green' : 'red' }}>
      {s.name}
    </li>
  )

  // Updating the screen
  const [count, setCount] = useState(0);
  function counter() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h3><u>Importing Component</u></h3>
      <Button />
      <hr />

      <h3><u>Fetching data</u></h3>
      <p><b>Name : </b> {user.name} </p>
      <p><b>Age : </b> {user.age} </p>
      <p><b>Phone : </b> {user.phone} </p>
      <p><b>Email : </b> {user.email} </p>
      <hr />

      <h3><u>Styling</u></h3>
      <p style={{
        fontSize: "x-large",
        color: "dark-blue",
        fontFamily: "cursive",
        fontWeight: 600
      }}>This paragraph is styled with inline styles.</p>
      <hr />

      <h3><u>Conditional Rendering</u></h3>
      <p><i><mark>If condion true</mark></i></p>
      {content}
      <p><i><mark>If condion false</mark></i></p>
      {status ? ("Welcome" + user.name + "...!") : (<Button />)}
      <hr />

      <h3><u>Rendering List</u></h3>
      <ul>
        {listItems}
      </ul>
      <p><i><mark>Styling Rendering List using conditional statements</mark></i></p>
      <ul>
        {studentList}
      </ul>
      <hr />

      <h3><u>Responding to events</u></h3>
      <Clicker />
      <hr />

      <h3><u>Updating the screen</u></h3>
      <button onClick={counter}><h2 style={{ margin: 0, padding: 5 }}> Clicked {count} times </h2></button>
      <hr />

    </div>
  );
}

export default App;
