import React, { useState } from 'react';
import { graphql } from 'graphql';
import gql from "graphql-tag";

import '../styles/App.css';

import Button from './Button';
import Input from './Input';

const QUERY = gql`
{
  person(input: 1) {
    val1
    val2
  }
  facility(val1: 2) {
    val3
    val4
  }
  exposure(val2: 5) {
    val5
  }
}
`;

function App() {
  // Setup state
  const [ inputValue, setInputValue ] = useState(0);

  // Method for button click
  const handleMagic = () => {
    console.log(inputValue)

    // TODO: Send GraphQL request
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
