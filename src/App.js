import React from 'react';
import Post from'./components/posts';
import './App.css';


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const postList = [
  {
    name: "Anakin skywalker",
    photo: <img id="photo" src={ANAKIN_IMAGE} alt="Anakin"/>,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: <img id="image" src={RAY_IMAGE} alt="Ray"/>,
    date: "26 лют."
  }
];

function App() {
  return (
    <div>
      { postList.map(post => <Post {...post}/>)}
    </div>
  );
}

export default App;
