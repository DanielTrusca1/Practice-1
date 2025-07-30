import React, { useState } from 'react'

const InputForm = () => {

  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);

  return (
    <div className='input-form'>
      <h1>
        Languages
      </h1>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Number"/>

      <p>
        Hello, My name is {name}
      </p>
      <p>
        I have {number} apples
      </p>
    </div>
  )
}

export default InputForm