// components/ProfileFormServer.ts
// Use command to install dependencies: npm install axios react-bootstrap react-bootstrap-form react-hook-form react-router-dom

import express from 'express';
import bodyParser from 'body-parser';
import { Pool } from 'pg';

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

app.use(bodyParser.json());

app.post('/api/profile', async (req, res) => {
  try {
    const { username, email, full_name, bio } = req.body;
    const query = 'INSERT INTO profiles (username, email, full_name, bio) VALUES ($1, $2, $3, $4)';
    await pool.query(query, [username, email, full_name, bio]);
    res.json({ message: 'Profile saved successfully' });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
