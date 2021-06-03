import request from 'request';
import cheerio from 'cheerio';

export async function getPortugueseSynonymous(word: string): Promise<object> {
  const URL = 'https://www.sinonimos.com.br';

  const newURL = `${URL}/${word}`;

  return request(newURL, (error, response, body) => {
    if (error) {
      return new Error('Error in the request');
    }

    if (response.statusCode === 200) {
      const $ = cheerio.load(body);
      const sinonimos = $('.sentido').text();

      // convert string into object or array and after an object

      return JSON.parse(sinonimos);
    } else {
      return new Error('Internal server error');
    }
  });
}
