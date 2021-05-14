const express = require('express');
const app = express();
const PORT = 3331;

app.get('/', (req, res) => {

    res.send('Welcome');

});


// start server
app.listen( PORT, () => {
    console.log(`App is running on http://localhost:${PORT} \n\nHit CTRL + C to stop the server`);
})