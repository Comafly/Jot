/*

Sets up a back-end server using Express to handle CRUD operations.

*/

require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ 
    origin:[ 
    'https://jotfrontend.onrender.com', 
    'https://jot-u675.onrender.com'], 
    credentials: true 
  }));

// MongoDB Note Schema
const noteSchema = new mongoose.Schema({
  noteText: String,
  tags: String
});
const Note = mongoose.model('Note', noteSchema, 'notes');

// Connects to the MongoDB database specified in the .ENV
const port = process.env.SERVER_PORT || 8000;
const mongoURI = process.env.MONGO_URI;

console.log("______");
console.log(port);
console.log(mongoURI);
console.log("______");

mongoose.connect(mongoURI, {  useNewUrlParser: true,  useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database.');
});

app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});

app.post('/notes', async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.send(note);
});

app.put('/notes/:id', async (req, res) => {
  const id = req.params.id;
  const noteText = req.body.note.noteText;
  const tags = req.body.note.tags;

  try 
  {
    const updatedNote = await Note.findByIdAndUpdate(id, { noteText, tags }, { new: true });
    res.send(updatedNote);
  }
    catch (err) 
  {
    console.error(err);
  }
});

app.delete('/notes/:id', async (req, res) => {
    try 
    {
      const { id } = req.params;
      const result = await Note.deleteOne({ _id: id });
      res.send(result);
    } 
    catch (err) 
    {
      console.error(err);
    }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});