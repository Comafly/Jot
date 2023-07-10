import React from 'react';

function NotesDisplay({ notes, searchTerm, handleDelete, handleEdit, handleSearch }) {
  return (
    <div className="notes">
      {notes
        .filter(
          note =>
            note.noteText.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.tags.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((n, index) => (
          // Create a container for the note.
          <div key={index} className="note">

            {/* Display the text of the note. */}
            <div className="note-text-area">{n.noteText}</div>

            {/* Create contanier for the note's tags. */}
            <div className="note-tags">
              <span>Tags: </span>
              
              {/* Split tags by comma and map each tag to its own component. */}
              {n.tags.split(',').map((tag, index) => (
                <span
                  key={index}
                  className="note-tag"
                  title={`Click to search for "${tag.trim()}"`}
                  onClick={() => handleSearch({ target: { value: tag.trim() } })}
                >
                  {/* Remove whitespace and add commas between each tag, except the last one. */}
                  {tag.trim()}
                  {index !== n.tags.split(',').length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>

            {/* Add a delete and edit buttons to each note. */}
            <span className="delete-btn" onClick={() => handleDelete(index)}>
              X
            </span>
            <span className="edit-btn" onClick={() => handleEdit(n)}>
              <img src={require('./images/edit.png')} alt="edit icon" />{' '}
            </span>
          </div>
        ))}
    </div>
  );
}

export default NotesDisplay;
