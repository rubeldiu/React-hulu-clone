import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTopRated);
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
