/*

Constructs and returns HTML to display the homepage.

*/

import React from 'react';
import { NotesContext } from './notes-context';
import NotesDisplay from './notes-display';
import NoteEditor from './note-editor';

const Homepage = () => 
{
    // Deconstruct the NotesContext object.
    const {
        notes,
        newNoteText,
        newTags,
        searchTerm,
        selectedNote,
        setSearchTerm,
        handleSubmit,
        handleSearch,
        handleEdit,
        handleDelete,
        handleNoteTextChange,
        handleNoteTagsChange,
        handleEditSave,
        handleEditCancel
    } = NotesContext();

    // Construct the homepage for the app.
    return (
        <div className="app">
            {/* Heading */}
            <div className="logo-container"> 
                <a href="https://github.com/Comafly/Jot" target="_blank"><img src={require('./images/logo64.png')} alt="Jot Logo"/> </a>
                 <p className="logo-text">Jot</p>
            </div>

            {/* Edit Note - Popup*/}
            {selectedNote ? (
                <div className="note-editor-container">
                     <div className="note-editor-overlay" onClick = { handleEditCancel }></div>
                     <NoteEditor note = { selectedNote } onSave = { handleEditSave } onCancel = { handleEditCancel } />
                </div>
            ) : null}

            {/* Search - Input Field*/}
            <span className="search-form-container">
                <input
                    type="text"
                    className="search-form"
                    placeholder="Search Notes"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <span className={
                    searchTerm.length > 0 ? 'clear-search-btn clear-search-btn-with-text' : 'clear-search-btn'} 
                    onClick={() => setSearchTerm('')}> Clear </span>
            </span>

            {/* Note Text - Input Field */}
            <form onSubmit={handleSubmit}>
            <textarea 
                value={newNoteText} 
                onChange={handleNoteTextChange} 
                className="new-note-input"
                placeholder="Enter your note here"
            />

            {/* Tag - Input Field */}
            <input 
                type="text" 
                value= {newTags} 
                onChange={handleNoteTagsChange} 
                className="new-tags-input" 
                placeholder="Tags (e.g.: food, recipe, noodles)" 
            />

            {/* Submit Note - Button */}
            <button 
                type="submit" 
                className="add-note-btn">
                Add Note
            </button>
            </form>

            {/* Divider */}
            <hr className="solid-line"></hr>

            {/* Notes Display - Sends methods to the notes-display component*/}
            <NotesDisplay
                notes={notes}
                searchTerm={searchTerm}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleSearch={handleSearch}
            />
        </div>
    )
}

export default Homepage;