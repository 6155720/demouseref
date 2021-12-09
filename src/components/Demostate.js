import React from 'react';
import { Container } from 'semantic-ui-react';
import { useState } from 'react';

const Demostate = () => {

  const [projet, setProjet] = useState("")
  console.log(projet)

  return (
    <div>
      Ajouter un projet : 
      <input type="text"
        value={projet}
        onChange={(e) => { setProjet(e.target.value) }} >
      </input>
      <Container>
        <h2>Demo State : {projet}</h2>
      </Container>
    </div>
  )
}
export default Demostate;