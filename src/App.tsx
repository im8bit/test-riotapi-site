import React from 'react';
import './App.css';
import CurrentLeaderboard from "./containers/CurrentLeaderboard";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            Valorant Leaderboard
        </header>
        <main className="App-main">
            <CurrentLeaderboard />
        </main>
    </div>
  );
}

export default App;
