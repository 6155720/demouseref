import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Divider, Form, Input, Label, Message, Table } from 'semantic-ui-react';

const PartieIII = () => {

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [code, setCode] = useState("")
    const [etudiants, setEtudiants] = useState([])
    const [error, setError] = useState("")

    const inputNom = useRef();

    useEffect(() => {
        inputNom.current.focus();
    }, [etudiants])

    const Ajouter = () => {
        if (nom !== "" && prenom !== "" && code !== "") {

            const newLiesteEtudeiants = [...etudiants, { "nom": nom, "prenom": prenom, "code": code }];

            setEtudiants(newLiesteEtudeiants)
            setNom("")
            setPrenom("")
            setCode("")
            setError("")
        } else {
            setError(" * Entrer tous les champs !")
        }
    }

    return (
        <Container>

            <Label basic color='green' pointing="right" >  Nom  :  </Label>
            <Input ref={inputNom} value={nom} onChange={(e) => { setNom(e.target.value) }} />

            <Label basic color='green' pointing="right">Prenom:</Label>
            <Input value={prenom} onChange={(e) => setPrenom(e.target.value)} />

            <Label basic color='green' pointing="right">Code:</Label>
            <Input  value={code} onChange={(e) => setCode(e.target.value)} />
            &nbsp;
            
            <Button compact color='green' onClick={Ajouter}>Ajouter la personne</Button>
            {error && <Message warning> {error} </Message>}

            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Notes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {etudiants.map((e) => {
                    return (
                        <tr>
                            <td>{e.nom}</td>
                            <td>{e.prenom}</td>
                            <td>{e.code}</td>
                        </tr>
                    )
                })}
            </Table>
        </Container>
    );
}

export default PartieIII;