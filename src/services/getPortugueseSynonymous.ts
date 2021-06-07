import request from 'request';
import cheerio from 'cheerio';
import incov from 'iconv-lite';

type Callback = {
  (error: boolean, messageError?: string, result?: string | string[]): void;
};

export function getPortugueseSynonymous(
  word: string,
  callback: Callback,
): void {
  const url = `https://www.sinonimos.com.br/${word}`;

  request({ url, encoding: null }, (error, response, body) => {
    if (error) {
      return callback(true, error);
    }

    if (response.statusCode === 200) {
      body = incov.decode(body, 'ISO-8859-1');

      const $ = cheerio.load(body, { decodeEntities: false });

      const synonymsArray: string[] = [];

      $('a[class=sinonimo]').each((_, elem) => {
        synonymsArray.push($(elem).text());
      });

      synonymsArray.join(', ');

      const cleanSynonymsArray = synonymsArray.filter(element => element);

      return callback(false, '', cleanSynonymsArray);
    } else {
      return callback(true, 'Internal server error');
    }
  });
}
