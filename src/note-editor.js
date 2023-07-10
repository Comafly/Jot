import { useState } from 'react';

const NoteEditor = ({ note, onSave, onCancel }) => 
{
  const [text, setText] = useState(note.noteText);
  const [tags, setTags] = useState(note.tags);

  // Call the onSave() function that was passed in to NoteEditor.
  const handleSave = () => { onSave({ ...note, noteText: text, tags }); };

  return (
    <div className="note-editor">
      <textarea 
        value = { text } 
        onChange = { e => setText(e.target.value) } 
      />
      <input 
        type = "text" 
        value = { tags } 
        onChange = { e => setTags(e.target.value) } 
      />
      <button onClick = { handleSave }> Save </button>
      <button onClick = { onCancel}> Cancel </button>
    </div>
  );
};

export default NoteEditor;