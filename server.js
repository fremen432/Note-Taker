const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// const fs = require('fs');
// const path = require('path');


// app.set('view engine', 'ejs')

// Calling 'use' methods from express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// app.get('/', (req, res) => {
//     console.log('Here')
//     res.render("index")
// });

// app.get('/notes', (req, res) =>{
//     res.sendFile(path.join(__dirname, './public/notes.html'));
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});