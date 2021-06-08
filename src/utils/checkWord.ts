export function isWord(word: string): boolean {
  if (/\s/g.test(word)) return false;
  if (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(word)) return false;
  if (/[0-9]/.test(word)) return false;

  return true;
}
