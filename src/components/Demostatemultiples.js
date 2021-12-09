import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { useState } from 'react';

const Demostatemultiples = () => {
  const [projet, setProjet] = useState("")
  const [projets, setProjets] = useState([])

  const addProjet = () => {
    if (projet !== "") {
      setProjet("");
      const newProjets = [...projets, projet];
      setProjets(newProjets);
    }
  }

  console.log(projet)
  return (
    <div >
      Ajouter un projet : <input className="input1" type="text" value={projet} onChange={(e) => { setProjet(e.target.value) }}></input>

      <Button size="small" color='red' onClick={addProjet}> Ajouter le projet</Button>
      <h1>Demo State : {projet}</h1>
      <ul>
        {projets.map((projet, i) => {
          return <li key={`projetnr${i}`}>{projet}</li>
        })}
      </ul>
    </div>
  )
}
export default Demostatemultiples;