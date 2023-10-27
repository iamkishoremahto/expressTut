const noteModel = require('../model/notes')



const createNote = async (req, res) => {
    try {
  
        const note = await noteModel.create({
            name: req.body.name,
            description: req.body.description,
            userId: req.userId
        });
        return res.status(200).json(note);

    }
    catch (error) {
        console.error(error.message);
        res.status(500).json({message:"Something went wrong"})

    }
}

const getNotes = async (req, res) => {
    try{
    const notes = await noteModel.find({userId: req.userId})
    return res.status(200).json(notes);
}
catch(error){
    console.error(error.message)
    res.status(500).json({message:"Something went wrong"})
}
}

const updateNote = async (req, res) => {
    try{
        const note_id = req.params.id;
        const updatedNote = req.body;

        const note = await noteModel.findOneAndUpdate({_id: note_id},updatedNote,{new:true});

        return res.status(200).json(note);

    }
    catch(error){
        console.error(error.message)
        res.status(500).json({message:error.message})
    }
}

const deleteNote = async (req, res) => {
    try{
        const note_id = req.params.id;
        const note = await noteModel.findOneAndDelete({_id: note_id})
        
        return res.status(204).json(note)
    }
    catch(error){
        console.error(error.message)
        res.status(500).json({message:error.message})
    }
}

module.exports = { createNote, getNotes, updateNote ,deleteNote};