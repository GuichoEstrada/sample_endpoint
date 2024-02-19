const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb+srv://lcrestrada:1Seb2Svs3Kmi@cluster0.mnc8coe.mongodb.net/Figma?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a schema for the 'files' collection
const filesSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String
});

// Create a model based on the schema
const File = mongoose.model('File', filesSchema);

// Route to fetch all files
app.get('/files', async (req, res) => {
  try {
    // Find all files in the 'files' collection
    const files = await File.find();

    // Return the files as JSON
    res.json(files);
  } catch (err) {
    console.error('Error fetching files:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch a specific file by ID
app.get('/files/:id', async (req, res) => {
  const fileId = req.params.id;

  try {
    // Find the file with the specified ID in the 'files' collection
    const file = await File.findById(fileId);

    if (file) {
      // Return the file data as JSON
      res.json(file);
    } else {
      // If file not found, return a 404 error
      res.status(404).json({ error: 'File not found' });
    }
  } catch (err) {
    console.error('Error fetching file:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
