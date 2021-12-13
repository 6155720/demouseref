import React, { useState } from 'react';
import { Button, Container, Divider, Input } from 'semantic-ui-react';

const PartieI = () => {

    const [projet, setProjet] = useState("")
    const [projets, setProjets] = useState([])

    const addProjet = () => {

        if (projet !== "") {
            const newProjets = [...projets, projet];
            setProjets(newProjets);
            setProjet("");
        }
    }

    return (
        <Container>
            <Divider horizontal></Divider>
            
            <Input placeholder="Nom du projet"
                type="text"
                value={projet}
                onChange={(e) => { setProjet(e.target.value) }}></Input>&nbsp;

            <Button compact onClick={addProjet} color="green"> Ajouter un projet </Button>

            <h5>Nom du projet : {projet}</h5>
            <h7>Listes des projet : </h7>
            <ul>
                {projets.map((mpProjet) => {
                    return <li> {mpProjet} </li>
                })}
            </ul>
        </Container>
    )
}

export default PartieI;