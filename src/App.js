import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [title, setTitle] = useState([]);

  const getTitle = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return res.json()
  }

  useEffect(() => {
    getTitle().then((res) => {
      setTitle(res)
    })
  }, [])

  return (
    <div className="App" >
      {title.length > 0 && title.map((i, k) =>
        <h1 key={k}>{i.title}</h1>
      )
      }

    </div>
  );
}

export default App;
