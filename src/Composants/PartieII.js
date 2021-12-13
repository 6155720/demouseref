import React, { useState } from 'react';
import { Button, Container, Label, Input } from 'semantic-ui-react';

const PartieII = () => {

    const [couleur, setCouleur] = useState("")

    return (
        <Container>
            <h3>Choisissez la couleur du bouton</h3>
            <li>red</li>
            <li>blue</li>
            <li>orange</li>
            <li>purple</li>
            <li>olive</li>
            <li>teal</li>
            <li>yellow</li>
            <Label basic color={couleur} pointing="right" > {couleur} </Label>
            <Input focus
                type="text"
                valeur={couleur}
                onChange={(e) => setCouleur(e.target.value)}
            ></Input>&nbsp;
            <h7>=</h7>&nbsp;
            <Button size="large" color={couleur}> Changeons la couleur </Button>
        </Container>
    );
}

export default PartieII;