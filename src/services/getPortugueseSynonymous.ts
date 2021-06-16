import cheerio from 'cheerio';
import incov from 'iconv-lite';
import rp from 'request-promise';
import AppError from '../errors/AppError';

export async function getPortugueseSynonymous(word: string) {
  const url = `https://www.sinonimos.com.br/${word}`;

  return await requestScraper(url);
}

export async function requestScraper(url: string) {
  try {
    const html = await rp({ url, encoding: null });
    return parseHTMLToSynonymsList(html);
  } catch (_) {
    throw new AppError('Internal Server Error');
  }
}

export function parseHTMLToSynonymsList(html: Buffer) {
  const body = incov.decode(html, 'ISO-8859-1');

  const $ = cheerio.load(body, { decodeEntities: false });

  const synonymsArray: string[] = [];

  $('a[class=sinonimo]').each((_, elem) => {
    synonymsArray.push($(elem).text());
  });

  synonymsArray.join(', ');

  return synonymsArray.filter(element => element);
}
