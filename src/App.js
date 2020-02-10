import React from 'react';
import logo from './logo.svg';
import './App.css';

const PersonForm = ({clearName, saveName, firstname}) =>(
  <div>
      <div>
        <label for='firstname'>
          Firstname:
          <input type='text' />
        </label>
        <button onClick={() => clearName ? clearName : console.log('Firstname cleared..')}>Clear Firstname</button>
        <button onClick={() => saveName ? saveName(firstname) : console.log('Lastname cleared..')}>Save Firstname </button>
      </div>

      <div>
        <label for='lastname'>
          Lastname:
          <input type='text' />
        </label>
        <button>Clear Lastname</button>
        <button>Save Lastname </button>
      </div>
  </div>
)

const App = () => {
  return (
    <div>
      <PersonForm />
    </div>
    );
}

export default App;
