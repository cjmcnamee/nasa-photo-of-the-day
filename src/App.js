import React, { useState, useEffect } from "react";
import "./App.css";
import Component from "./Component";
import axios from "axios"

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( (res) => {
        setPhotos(res.data)
      })
      .catch( err => console.log("Oopsies!: ", err))
  }, [] )


  return (
    <div className="App">
      <Component url={photos.url} title={photos.title} explanation={photos.explanation} />
    </div>
  );
}

export default App;
