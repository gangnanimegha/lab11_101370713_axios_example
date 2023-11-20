// App.js
import React from 'react';
import PersonList from './PersonList';
import PersonListWithFetch from './PersonListWithFetch';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <PersonList />
      <PersonListWithFetch />
    </div>
  );
}

export default App;
