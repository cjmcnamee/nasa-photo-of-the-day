import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Component from "./Component.js";
import axios from "axios";
import styled from 'styled-components'

function App() {
  const [mediaType, setMediaType] = useState('');
  const [photos, setPhotos] = useState('');

  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=83IKOh3AunEUBpm9dSpHZLkMsVIUJ6DS41MfyHaL')
      .then( (res) => {
        setPhotos(res.data)
        setMediaType(res.data.media_type)
      })
      .catch( err => console.log("Oopsies!: ", err))
  }, [] )


  return (
    <div className="App">
      <Header date={photos.date} />
      <Component url={photos.url} title={photos.title} explanation={photos.explanation} media_type={mediaType}/>
    </div>
  );
}

export default App;
