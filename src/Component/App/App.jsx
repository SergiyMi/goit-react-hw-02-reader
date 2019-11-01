import React from 'react';
import './App.module.css';

import publications from '../../DB/publications.json';
import Reader from '../Reader/Reader';

const App = () => {
  return (
    <Reader items={publications}/>
  );
}

export default App;
