import request from 'request';
import cheerio from 'cheerio';

export function CrawlerSynonymous(word: string): void {
    const URL = 'https://www.sinonimosonline.com';

    const newURL = `${URL}/${word}`;

    request(newURL, (error, response, body) => {
        if (error) {
            console.log("Error: " + error);
        }

        if (response.statusCode === 200) {
            const $ = cheerio.load(body);
            const sinonimos = $('.sentido').text();
            console.log(sinonimos);
        }
    })
}

