const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const fs = require('fs');
const path = require('path');

app.set('view engine', 'ejs')

app.use(express.static('public'));


// app.get('/', (req, res) => {
//     console.log('Here')
//     res.render("index")
// });

app.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './Develop/public/index.html'));
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});