/*

Handles States and Functionality.

*/

import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';
import { fetchNotes, adjustInputFields } from './notes-utils';

const serverURL = 'https://jot-u675.onrender.com/';
const dbCollection = 'notes';

export function NotesContext()
{
  //States to manage the notes, tags, and search data.
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');
  const [newTags, setNewTags] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  const noteTextCharLimit = 500;
  const noteTagCharLimit = 200;
  const searchCharLimit = 100;

  const handleNoteTextChange = e => { 
    if (e.target.value.length <= noteTextCharLimit) {
      setNewNoteText(e.target.value); 
    }
  };
  const handleNoteTagsChange = e => { 
    if (e.target.value.length <= noteTagCharLimit) {
      setNewTags(e.target.value);  
    }
  };
  const handleSearch = e => { 
    if (e.target.value.length <= searchCharLimit) {
      setSearchTerm(e.target.value); 
    }
  };

  const handleEdit = (note) => { setSelectedNote(note); };
  const handleEditCancel = () => { setSelectedNote(null); };
  const handleEditSave = async (note) => {
    try {
      const response = await axios.put(`${serverURL}${dbCollection}/${note._id}`, {
        note
      });
      if (response.status === 200) {
        const updatedNotes = notes.map(n => {
          if (n._id === note._id) {
            return response.data;
          } else {
            return n;
          }
        });
        setNotes(updatedNotes);
        setSelectedNote('');
      }
    } catch (err) {
      console.error(err);
      // Handle error state or display error message to user.
    }
  };


  // Adding a new note.
  const handleSubmit = async e => 
  {
    // Prevent the default form submit behavior
    e.preventDefault();

    // Object to hold the data for the new note
    const newNoteData = { noteText: newNoteText, tags: newTags };

    try {
      const response = await axios.post(`${serverURL}${dbCollection}`, newNoteData);

      // If the request was successful, update the notes and append the response to the array.
      if (response.status === 200) {
        setNotes([...notes, response.data]);
        setNewNoteText('');
        setNewTags('');

        // Reset the noteTextArea height when a note is submitted.
        const noteTextArea = document.querySelector(".new-note-input");
        noteTextArea.style.height = "";
      }
    } 
    catch (error) 
    {
      console.error(error);
    }
  };

  // Deleting a stored note.
  const handleDelete = async (index) => 
  {
    const confirmation = window.confirm(`Permanently DELETE this note?`);

    if (confirmation) 
    {
      try {
        // Get the note to be deleted
        const note = notes[index];
        
        // Make a DELETE request to the API to delete the note
        await axios.delete(`${serverURL}${dbCollection}/${note._id}`);

        // Update the state to remove the deleted note
        setNotes(notes.filter((_, i) => i !== index));
      } 
      catch (err) 
      {
        console.error(err);
      }
    }
  };

  // Effect Hooks
  useEffect(() => 
  {
    fetchNotes(setNotes, serverURL, dbCollection);
    adjustInputFields();
  }, []);

  // Return an object holding state and note information.
  return {
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
  };
}