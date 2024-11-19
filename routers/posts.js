const express = require('express')
const router = express.Router()
const posts = require('../posts.js')

// Index
router.get('/' ,(req,res) => {
    res.send('Lista dei post')
})
// Show
router.get('/:id' ,(req,res) => {
    res.send('Post all\'id #')
})
// Create
router.post('/' , (req,res) => {
    res.send('Creazione del post')
})
// Update
router.put('/:id' , (req,res) => {
    res.send('Aggiornamento del post')
})
// Modify
router.patch('/:id' , (req,res) => {
    res.send('Modifica del post')
})
// Delete
router.delete('/:id' , (req,res) => {
    res.send('Cancellazione del post')
})

module.exports = router
