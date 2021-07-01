import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import ActivityItemList from './components/ActivityItemList';
import ProjectList from './components/ProjectList';



function App() {
  return (
    <div className="App">
      <Header />
      <section className="row">
        <Profile name="Debbie Lewis" username="debbielewis" avatar="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" projectCount="8" membership="Pro Member" githubUrl="https://example.com/debbielewis" />
        <ProjectList />
        <ActivityItemList />
      </section>
    </div>
  );
}

export default App;
