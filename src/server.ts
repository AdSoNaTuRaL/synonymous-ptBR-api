import express from 'express';
import cors from 'cors';
import { isWord } from './utils/checkWord';
import { getPortugueseSynonymous } from './services/getPortugueseSynonymous';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  return res.json({ message: 'Hello World' });
});

app.get('/search', (req, res) => {
  const { q } = req.query;

  if (q) {
    const isRealWord = isWord(q as string);

    if (!isRealWord) {
      return res.status(400).json({ error: 'Invalid word' });
    }

    getPortugueseSynonymous(q as string, (error, errorMessage, result) => {
      if (error) {
        return res.status(500).json({ error, errorMessage });
      }

      return res.json(result);
    });
  } else {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
});

app.listen(3333, () => {
  console.log('🚀 Server runing');
});
