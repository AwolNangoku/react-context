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

const App = (props) =>
   (
    <div className="App">
      <NameContext.Provider value={props.user}>
        <Employer />

      </NameContext.Provider>
    </div>
  )

export default App;
