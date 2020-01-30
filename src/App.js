import React from 'react';
import NameContext from './contexts/NameContext';
import logo from './logo.svg';
import './App.css';

const Employer = () => (<StaffMember />)

const StaffMember = () =>(
  <NameContext.Consumer>
    {
      ({name, lastname}) => (<div>Your name is: {name}</div>)
    }
  </NameContext.Consumer>
)

function App() {
  return (
    <div className="App">
        <Employer />
    </div>
  );
}

export default App;
