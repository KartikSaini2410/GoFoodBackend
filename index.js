const express = require('express');
const app = express();

const port = process.env.PORT || 4000; 

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
