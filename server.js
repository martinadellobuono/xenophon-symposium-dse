const express = require('express');
const path = require('path');

const app = express();

// Serve i file statici generati da Webpack
app.use(express.static(path.join(__dirname, 'dist')));

// Rispondi con il file index.html per tutte le richieste non gestite (per supportare il routing lato client)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Porta su cui il server ascolterà
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});