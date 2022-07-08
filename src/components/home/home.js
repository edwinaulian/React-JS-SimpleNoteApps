import React from 'react';
import { getInitialData } from '../../utils/index.js';
import CardContent from './../cardContent/CardContent';
import CardContentArsip from './../arsip/CardContentArsip';
import NoteInput from './../formInput/NoteInput';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            archivedNotes: [],
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onDeleteArchiveHandler = this.onDeleteArchiveHandler.bind(this);
        this.onArciveHandler = this.onArciveHandler.bind(this);
        this.onActiveHandler = this.onActiveHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        const createdAtDate = new Date();
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false, 
                        createdAt: createdAtDate,
                    }
                ]
            }
        })
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id && note.archived === false);
        this.setState({ notes });
    }

    onDeleteArchiveHandler(id) {
        const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id && note.archived === true);
        this.setState({ archivedNotes });
    }

    onArciveHandler(id) {
        // like a deleted but this data just moved to the archived Notes
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });

        const oneArch = this.state.notes.filter(note => note.id === id);
        oneArch.map(note => note.archived = true);

        this.setState((prevState) => {
            return {
                archivedNotes: [
                    ...prevState.archivedNotes,
                    ...oneArch,
                ]
            }
        })
    }

    onActiveHandler(id) {
        // like a deleted but this data just moved to the active notes
        const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id);
        this.setState({ archivedNotes });

        const oneActive = this.state.archivedNotes.filter(note => note.id === id);
        oneActive.map(note => note.archived = false);

        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    ...oneActive,
                ]
            }
        })
    }

    render() {
        return (
        <div className="container_home">
            <NoteInput addNote={this.onAddNoteHandler} />
            <CardContent notes={this.state.notes} onDelete={this.onDeleteNoteHandler} onArcive={this.onArciveHandler} />
            <CardContentArsip archivedNotes={this.state.archivedNotes} onDelete={this.onDeleteArchiveHandler} onActive={this.onActiveHandler}  />
        </div>
        );
    }
}

export default Home;
