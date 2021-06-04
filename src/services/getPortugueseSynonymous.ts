import request from 'request';
import cheerio from 'cheerio';
// import incov from 'iconv-lite';

export async function getPortugueseSynonymous(word: string): Promise<any> {
  const URL = 'https://www.sinonimos.com.br';

  const newURL = `${URL}/${word}`;
  // const encoding = 'UTF-8';

  request(newURL, (error, response, body) => {
    // const body1 = incov.decode(body, encoding);

    if (error) {
      return new Error('Error in the request');
    }

    if (response.statusCode === 200) {
      const $ = cheerio.load(body, { decodeEntities: false });
      const sinonimos = $('.sentido').text();

      console.log(sinonimos);

      const arraySynonymous = sinonimos.split(':').filter(element => element);

      console.log(arraySynonymous);

      const result = Object.assign({}, arraySynonymous);

      console.log(result);

      return result;
    } else {
      return new Error('Internal server error');
    }
  });
}
