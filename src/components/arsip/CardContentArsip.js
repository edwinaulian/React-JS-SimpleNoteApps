import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function CardContentArsip({ archivedNotes, onDelete, onActive}) {

    const emptyData = () => {
        if(archivedNotes.length === 0) {
            return <h6>Archive Note is Empty!</h6>;
        }
    }

    return (
        <article className="card-article">
            <div className="mainNote">
                <h1>Archive Note</h1>
                <br/>
            {
                archivedNotes.map((value) => {
                    return (
                            <Card border="success" key={value.id} style={{ width: '18rem', fontSize: '14px', fontWeight: 400, marginLeft:'10px', marginBottom:'10px', display:'inline-block' }}>
                                <Card.Header>{value.title} | {new Date(value.createdAt).toLocaleDateString('fr')}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text style={{fontSize: '14px'}}>{value.body}</Card.Text>
                                    <Button variant="danger" onClick={() => onDelete(value.id)}>Delete</Button>{' '}
                                    <Button variant="secondary" onClick={() => onActive(value.id)}>Move To Active</Button>
                                </Card.Body>
                            </Card>
                    )
                })
            }
            {emptyData()}
            </div>
        </article>
    )
}

export default CardContentArsip;