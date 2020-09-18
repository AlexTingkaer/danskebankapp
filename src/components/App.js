import React, { useState } from 'react';
import '../styles/App.css';
import { graphql } from 'graphql';
import { schema, resolvers } from '../graphql/schema';

import Button from './Button';
import Input from './Input';

  const query = `
    query { 
      val1
      val2
    }
  `;

function App() {
  // Setup state
  const [ inputValue, setInputValue ] = useState(0);

  // Method for button click
  const handleMagic = () => {
    console.log(inputValue)

    graphql(schema, query, resolvers)
    .then(result => {
      console.log(result);
    });
  }

  // Method for input
  const handleChange = (e) => {
    // TODO: Validation for number input
    // only accept 1-10 characters
    if(e.target.value.length <= 10) {
      setInputValue(e.target.value)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input onChange={handleChange} value={inputValue} style={{ marginBottom: 10 }} labelText="Input value here >" />
        <Button onClick={handleMagic} text="Magic happens.." />
      </header>
    </div>
  );
}

export default App;
