import request from 'request';
import cheerio from 'cheerio';

type Callback = {
  (error: boolean, messageError?: string, result?: string | string[]): void;
};
// import incov from 'iconv-lite';

export function getPortugueseSynonymous(
  word: string,
  callback: Callback,
): void {
  const URL = 'https://www.sinonimos.com.br';

  const newURL = `${URL}/${word}`;
  // const encoding = 'UTF-8';

  request(newURL, (error, response, body) => {
    // const body1 = incov.decode(body, encoding);

    if (error) {
      // https://github.com/request/request-promise#thenonfulfilled-onrejected
      return callback(true, error);
    }

    if (response.statusCode === 200) {
      const $ = cheerio.load(body, { decodeEntities: false });

      const sinonimos = $('.sentido').text();

      const arraySynonymous = sinonimos.split(':').filter(element => element);

      const result = Object.assign({}, arraySynonymous);

      return callback(false, '', result);
    } else {
      return callback(true, 'Internal server error');
    }
  });
}
