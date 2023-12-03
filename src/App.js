import React from 'react';
import RestaurantList from './components/RestaurantList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant Explorer</h1>
      </header>
      <main>
        <RestaurantList />
      </main>
      <footer>
        <p>&copy; 2023 Restaurant Explorer</p>
      </footer>
    </div>
  );
}

export default App;
