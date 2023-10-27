const Router = require('express').Router();
const auth = require('../middleware/auth');

const { createNote , getNotes, updateNote, deleteNote } = require('../controller/noteController')

Router.post('/',auth,createNote);
Router.get('/', auth, getNotes);
Router.patch('/:id', auth, updateNote);
Router.delete('/:id', auth, deleteNote);

module.exports = Router;


