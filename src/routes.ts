import { Router } from 'express';
import { isWord } from './utils/checkWord';
import { getPortugueseSynonymous } from './services/getPortugueseSynonymous';

const router = Router();

router.get('/', (_, res) => {
  return res.json({
    msg:
      'Welcome to Synonyms API, to kwow details acess: ' +
      'https://github.com/AdSoNaTuRaL/synonymous-ptBR-api',
  });
});

router.get('/synonym', async (req, res) => {
  const { q } = req.query;

  if (q) {
    const isRealWord = isWord(q as string);

    if (!isRealWord) {
      return res.status(400).json({ error: 'Invalid word' });
    }

    const result = await getPortugueseSynonymous(q as string);

    return res.json({ synonyms: result });
  } else {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
});

export default router;
