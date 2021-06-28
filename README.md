# Synonym [/synonym]

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
