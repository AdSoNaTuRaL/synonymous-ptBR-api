import AppError from '../errors/AppError';
import { getPortugueseSynonymous } from './getPortugueseSynonymous';

describe('Get a list of synonyms, given a word', () => {
  it('should check if given a valid word, returns a array', async () => {
    const result = await getPortugueseSynonymous('sacada');

    expect(Array.isArray(result)).toBe(true);
  });

  it('should check if given a invalid word, throw a error', async () => {
    await expect(getPortugueseSynonymous('aa')).rejects.toEqual(
      new AppError('Internal Server Error'),
    );
  });
});
