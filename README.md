<div align="center">
   <h1>Synonyms pt-BR API</h1>
</div>

The <strong>Synonyms pt-BR API</strong> is a Restful API, built with <strong> NodeJS </strong>.

## 🚀 Technology

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)

## ⤵ How to run

```bash
# Clone Repository
$ git clone https://github.com/AdSoNaTuRaL/synonymous-ptBR-api.git
$ cd synonymous-ptBR-api
```

```bash
# Install Dependencies
$ yarn
```

```bash
# Run Aplication locally
$ yarn dev:server
```

## ⤵ Tests

```bash
$ yarn test
```

## ✍ Browser Extension

Check [this](https://github.com/AdSoNaTuRaL/cs50-problem-sets/tree/main/final-project), if you want use as a browser extension (Google Chrome and Microsoft Edge already tested.)

## 🤔 Issues

Feel free to **create a new issue** with a respective title and description on the [synonymous-ptBR-api](https://github.com/AdSoNaTuRaL/synonymous-ptBR-api/issues) repository.
If you already found a solution to your problem, **I would love to review your pull request**!

## 📍 Synonym Routes [/synonym]

### Get synonym [GET]

Get a synonym, given a word.

- Query Parameter
  - Example: http://localhost:3333/synonym?q=example
  - q (string)(required)
- Responses
  - Response 200 (application/json)
    - Synonyms ({ synonyms: Promise<string[]> })
  - Response [Error] (application/json)
    - Error ({ status: string, message: string })
