import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function CardContent({ notes, onDelete, onArcive}) {

    const emptyData = () => {
        if(notes.length === 0) {
            return <h6>Active Note is Empty!</h6> ;
        }
    }

    return (
        <article className="card-article">
            <div className="mainNote">
                <h1>Active Note</h1>
            <br/>
            {
                notes.map((value) => {
                    return (
                            <Card border="success" key={value.id} style={{ width: '18rem', fontSize: '14px', fontWeight: 400, marginLeft:'10px', marginBottom:'10px', display:'inline-block' }}>
                                <Card.Header>{value.title} | {new Date(value.createdAt).toLocaleDateString('fr')}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{value.title}</Card.Title>
                                    <Card.Text style={{fontSize: '14px'}}>{value.body}</Card.Text>
                                    <Button variant="danger" onClick={() => onDelete(value.id)}>Delete</Button>{' '}
                                    <Button variant="secondary" onClick={() => onArcive(value.id)}>Archive</Button>
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

export default CardContent;