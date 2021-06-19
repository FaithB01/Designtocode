import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Activity from './components/Activity';



function App() {
  return (
    <div className="App">
      <Header />
      <section className="row">
        <Profile />
        <Projects />
        <Activity />
      </section>
    </div>
  );
}
export default App;
