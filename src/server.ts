import express from 'express';
import cors from 'cors';
import { isWord } from './services/CheckWordService';
import { CrawlerSynonymous } from './services/CrawlerSynonymous';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
  return res.json({ message: 'Hello World' });
});

app.get('/search', (req, res) => {
  const { word } = req.query;

  if (word) {
    const isRealWord = isWord(word as string);

    if (!isRealWord) {
      return res.status(400).json({ error: 'Invalid word' });
    }
    
    CrawlerSynonymous(word as string);
  } else {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
});

app.listen(3333, () => {
  console.log('🚀 Server runing');
});
