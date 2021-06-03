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

app.get('/search', async (req, res) => {
  const { q } = req.query;

  console.log(q);

  if (q) {
    const isRealWord = isWord(q as string);

    if (!isRealWord) {
      return res.status(400).json({ error: 'Invalid word' });
    }

    const result = await getPortugueseSynonymous(q as string);

    if (result instanceof Error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
});

app.listen(3333, () => {
  console.log('🚀 Server runing');
});
