import React, { useState } from 'react';
// http://p.yoco.co.za:9090/api/client/v1/signUp/reset
  const PersonForm = ({firstname:{ firstname }, lastname, saveName, clearName}) =>{
    const [fname, setFName] = useState('')
    return(
      <div>
        <div>
          <label for='firstname'>
            Firstname:
            <input type='text' value={fname} onChange={(event) => {
              setFName(event.target.value);
            }}/>
          </label>
          <button onClick={() => clearName ? clearName() : console.log('Firstname cleared..')}>Clear Firstname</button>
          <button onClick={(event) => saveName ? saveName(fname) : console.log('Lastname cleared..')}>Save Firstname </button>
        </div>

        <div>
          <label for='lastname'>
            Lastname:
            <input type='text' />
          </label>
          <button>Clear Lastname</button>
          <button>Save Lastname </button>
        </div>
        <p>Your name is : {firstname} </p>
    </div>
      )
}

export default PersonForm;