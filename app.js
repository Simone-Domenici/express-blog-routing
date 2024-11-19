const express = require('express')
const app = express()
const port = 3000

const posts = require('./posts.js')

app.use(express.static('public'));

// Index
app.get('/posts' ,(req,res) => {
    res.send('Lista dei post')
})
// Show
app.get('/posts/:id' ,(req,res) => {
    res.send('Post all\'id #')
   })
// Create
app.post('/posts' , (req,res) => {
    res.send('Creazione del post')
})
// Update
app.put('/posts/:id' , (req,res) => {
    res.send('Aggiornamento del post')
})
// Modify
app.patch('/posts/:id' , (req,res) => {
    res.send('Modifica del post')
})
// Delete
app.delete('/posts/:id' , (req,res) => {
    res.send('Cancellazione del post')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
