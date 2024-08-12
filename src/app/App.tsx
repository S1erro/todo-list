import React from 'react';
import './styles/index.scss';
import Navbar from "widgets/Navbar";
import OptionsSelector from "widgets/OptionsSelector";
import AppRouter from "./router/AppRouter";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <OptionsSelector/>
      <AppRouter />
    </div>
  );
}

export default App;
