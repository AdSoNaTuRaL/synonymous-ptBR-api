# Synonym [/synonym]

### Get synonym [GET]

Get a synonym, given a word.

- Query Parameter
  - Example: http://localhost:3333/synonym?q=example
  - q (string)(required)
- Responses
  - Response 200 (application/json)
    - Synonyms ({ synonyms: string, string[] })
  - Response 400 (application/json)
    - Error ({ error: string })
  - Response 500 (application/json)
    - Error ({ error: bool, errorMessage: string })
