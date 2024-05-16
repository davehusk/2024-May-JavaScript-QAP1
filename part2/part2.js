const express = require('express');
const app = express();
const path = require('path');

// Serve the image file
app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'image.png');
  res.sendFile(imagePath);
  console.log('Image sent');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});