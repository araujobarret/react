const express = require('express');

const PORT = process.env.PORT || 3000;

// Create the app
let app = express();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
})
