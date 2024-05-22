import React from 'react';
import './App.css';
import Header from './Component/Header';
import GoalList from './Component/GoalList';

function App() {
  return (
    <div className="App">
      <Header />
      <GoalList />
    </div>
  );
}

export default App;