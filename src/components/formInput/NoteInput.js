import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class NoteInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            body: '',
            archived: '', 
            createdAt: '',
            maxExp: 50,
        }
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
    }

    render() {
        return (
        <article className="card-article">
            <div >
                <h2>CREATE NOTE</h2>
                <Form onSubmit={this.onSubmitEventHandler} >
                    <Row>   
                        <Col md={10}>The rest of the characters: {this.state.maxExp}</Col>   
                    </Row>
                    <Form.Group className="mb-3" controlId="noteForm.ControlInput1">
                        <Col sm={8}>
                            <Form.Control type="text" value={this.state.title} onChange={this.onTitleChangeEventHandler} required  placeholder="Input Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="noteForm.ControlTextarea1">
                        <Col sm={8}>
                            <Form.Control as="textarea" value={this.state.body} onChange={this.onNoteChangeEventHandler}  required placeholder="Write Your Note Here" rows={8} />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </div>
        </article>
        )
    }


    onTitleChangeEventHandler(event) {
        const maxExp = 50 - event.target.value.length;
        if (maxExp === -1) return maxExp;
        this.setState({maxExp});

        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
    }

    onNoteChangeEventHandler(event) {   
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }
}

export default NoteInput;