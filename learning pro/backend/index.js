import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('This is backend server');
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'Why don’t scientists trust atoms? Because they make up everything.',
    },
    {
      id: 2,
      title: 'Another joke',
      content: 'Why did the scarecrow win an award? Because he was outstanding in his field.',
    },
    {
      id: 3,
      title: 'Yet another joke',
      content: 'Why don’t skeletons fight each other? They don’t have the guts.',
    }
  ];
  res.json(jokes);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
}); 