import React, { useState } from 'react'

const InputForm = () => {

  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);

  return (
    <div className='input-form'>
      <h1>
        Languages
      </h1>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      <input type="text" placeholder="Number" onChange={(e) => setNumber(e.target.value)}/>

      <p>
        Hello, My name is <span>{name}</span>
      </p>
      <p>
        I have <span>{number}</span> apples
      </p>
    </div>
  )
}

export default InputForm