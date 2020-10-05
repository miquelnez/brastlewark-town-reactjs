import React from 'react';
import './App.css';
import GnomeList from './components/gnome-list/GnomeList';
import GnomeSearch from './components/gnome-search/GnomeSearch';

function App() {
  
  return (
    <div className="App">
      <GnomeSearch />
      <GnomeList />
    </div>
  );
}

export default App;
