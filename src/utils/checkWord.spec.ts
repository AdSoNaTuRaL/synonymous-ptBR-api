import { isWord } from './checkWord';

describe('Check invalid word', () => {
  it('should check if given a string is not a valid word', () => {
    const words = [
      'adson.henrique',
      '__test__',
      '00adson',
      'adson10',
      'Adson Henrique',
    ];

    words.map(word => {
      expect(isWord(word)).toBe(false);
    });
  });

  it('should check if given a string is a valid word', () => {
    const words = [
      'açaí',
      'útil',
      'adson',
      'AdsoN',
      'AdSon',
      'características',
    ];

    words.map(word => {
      expect(isWord(word)).toBe(true);
    });
  });
});
