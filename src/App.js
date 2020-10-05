import React from 'react';
import './App.css';
import GnomeList from './components/gnome-list/GnomeList';
import GnomeSearch from './components/gnome-search/GnomeSearch';
import Container from '@material-ui/core/Container';

function App() {
  
  return (
    <Container maxWidth="xl">
      <h1>Brastlewark Town</h1>
      <GnomeSearch />
      <GnomeList />
    </Container>
  );
}

export default App;
