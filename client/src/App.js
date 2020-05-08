import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [project, setProject] = useState([]);

  const handleProOne = (id) => {
    axios
      .get(`http://localhost:4000/projects/${id}`)
      .then((res) => {
        //console.log(res.data);
        setProject(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={()=>handleProOne(1)}>Project one</button>
      <button onClick={()=>handleProOne(2)}>Project two</button>
      <button onClick={()=>handleProOne(3)}>Project three</button>
      <div className="right">
        <div className="post">
          <div>
          <h3>{project.name}</h3>
          <h4>{project.description}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
