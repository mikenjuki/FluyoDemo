const translations = {
  "the": {
    "en": "the",
    "de": "das"
  },
  "house": {
    "en": "house",
    "de": "Haus"
  },
  "is": {
    "en": "is",
    "de": "ist"
  },
  "small": {
    "en": "small",
    "de": "klein"
  },
  "i": {
    "en": "i",
    "de": "ich"
  },
  "am": {
    "en": "am",
    "de": "bin"
  },
  "hungry": {
    "en": "hungry ",
    "de": "Hunger "
  },
  "where": {
    "en": "where",
    "de": "wo"
  },
  "bathroom": {
    "en": "bathroom",
    "de": "toilette"
  },
  "what": {
    "en": "what",
    "de": "was"
  },
  "time": {
    "en": "time",
    "de": "eit"
  },
  "food": {
    "en": "food",
    "de": "essen"
  },
  "it": {
    "en": "it",
    "de": "es"
  },
  "don't": {
    "en": "don't",
    "de": "nicht"
  },
  "understand": {
    "en": "understand",
    "de": "verstehe"
  },
  "how": {
    "en": "how",
    "de": "wie"
  },
  "are": {
    "en": "are",
    "de": "bist"
  },
  "you": {
    "en": "you",
    "de": "du"
  },
  "from": {
    "en": "from",
    "de": "aus"
  },
  "USA": {
    "en": "USA",
    "de": "USA"
  },
  "please": {
    "en": "please",
    "de": "bitte"
  },
  "give": {
    "en": "give",
    "de": "geben"
  },
  "bill": {
    "en": "bill",
    "de": "rechnung"
  },
  "she": {
    "en": "she",
    "de": "Sie"
  },
  "speaks": {
    "en": "speaks",
    "de": "spricht"
  },
  "German": {
    "en": "German",
    "de": "Deutsch"
  },
  "fluently": {
    "en": "fluently",
    "de": "fließend"
  },
  "like": {
    "en": "like",
    "de": "gerne"
  },
  "to": {
    "en": "to",
    "de": "zu"
  },
  "travel": {
    "en": "travel",
    "de": "reisen"
  },
  "by": {
    "en": "by",
    "de": "mit"
  },
  "train": {
    "en": "train",
    "de": "Zug"
  },
  "Can": {
    "en": "Can",
    "de": "Können"
  },
  "help": {
    "en": "help",
    "de": "helfen"
  },
  "me": {
    "en": "me",
    "de": "mir"
  }
}
const questions = [
  {
      "id": "aBcDeFgHiJkLmNoPqRsT",
      "englishSentence": "The house is small",
      "questionNumber": 1,
      "incompleteSentence": "Das -- ist klein",
      "languagePair": "en-de",
      "correctAnswer": "haus",
      "missingWord": {
          "options": [
              "folgen",
              "schaf",
              "haus",
              "grosse"
          ],
          "index": 2
      }
  },
  {
      "id": "dEfAbCdGhIjKlMnOpQrS",
      "englishSentence": "Where is the bathroom?",
      "missingWord": {
          "options": [
              "toilette",
              "Küche",
              "Schlafzimmer",
              "Wohnzimmer"
          ],
          "index": 0
      },
      "questionNumber": 2,
      "languagePair": "en-de",
      "correctAnswer": "toilette",
      "incompleteSentence": "Wo ist die --?"
  },
  {
      "id": "hIjKlMnOpQrStUvWxYzA",
      "incompleteSentence": "Ich komme aus den --",
      "languagePair": "en-de",
      "questionNumber": 3,
      "missingWord": {
          "options": [
              "Kanada",
              "Südafrika",
              "USA",
              "Frankreich"
          ],
          "index": 2
      },
      "correctAnswer": "USA",
      "englishSentence": "I am from the USA"
  },
  {
      "id": "j4DrlUjH4jfKW2EmS3LB",
      "incompleteSentence": "ich -- essen",
      "englishSentence": "i love food",
      "missingWord": {
          "options": [
              "hasse",
              "liebe",
              "mag",
              "bin"
          ],
          "index": 2
      },
      "correctAnswer": "liebe",
      "questionNumber": 4,
      "languagePair": "en-de"
  },
  {
      "id": "kLmNoPqRsTuVwXyZaBcD",
      "questionNumber": 5,
      "correctAnswer": "dir",
      "languagePair": "en-de",
      "incompleteSentence": "Wie geht es --?",
      "englishSentence": "How are you?",
      "missingWord": {
          "options": [
              "mich",
              "dir",
              "uns",
              "ihnen"
          ],
          "index": 1
      }
  },
  {
      "id": "pQrStUvWxYzAbCdEfGhI",
      "incompleteSentence": "Ich verstehe --.",
      "missingWord": {
          "index": 3,
          "options": [
              "nie",
              "auch",
              "doch",
              "nicht"
          ]
      },
      "correctAnswer": "nicht",
      "languagePair": "en-de",
      "questionNumber": 6,
      "englishSentence": "I don't understand."
  },
  {
      "id": "qRsTuVwXyZaBcDeFgHiJ",
      "correctAnswer": "Deutsch",
      "languagePair": "en-de",
      "missingWord": {
          "index": 0,
          "options": [
              "Deutsch",
              "Englisch",
              "Französisch",
              "Spanisch"
          ]
      },
      "incompleteSentence": "Sie spricht fließend --.",
      "englishSentence": "She speaks German fluently.",
      "questionNumber": 7
  },
  {
      "id": "rStUvWxYzAbCdEfGhIjK",
      "englishSentence": "My name is Brian",
      "incompleteSentence": "-- name ist Brian",
      "correctAnswer": "mein",
      "missingWord": {
          "index": 0,
          "options": [
              "Mein",
              "Dein",
              "Sein",
              "Ihr"
          ]
      },
      "languagePair": "en-de",
      "questionNumber": 8
  },
  {
      "id": "sTuVwXyZaBcDeFgHiJkL",
      "englishSentence": "Please give me the bill",
      "correctAnswer": "rechnung",
      "languagePair": "en-de",
      "incompleteSentence": "Bitte geben Sie mir --",
      "questionNumber": 9,
      "missingWord": {
          "index": 1,
          "options": [
              "Essen",
              "Rechnung",
              "Wasser",
              "Tasche"
          ]
      }
  },
  {
      "id": "wXyZaBcDeFgHiJkLmNoP",
      "questionNumber": 10,
      "englishSentence": "I like trains",
      "correctAnswer": "zug",
      "incompleteSentence": "Ich mag --",
      "languagePair": "en-de",
      "missingWord": {
          "index": 0,
          "options": [
              "Züge",
              "Autos",
              "Flugzeuge",
              "Bären"
          ]
      }
  },
  {
      "id": "xYzAbCdEfGhIjKlMnOpQ",
      "incompleteSentence": "Wie spät ist --?",
      "questionNumber": 11,
      "missingWord": {
          "index": 0,
          "options": [
              "es",
              "du",
              "wir",
              "ihr"
          ]
      },
      "languagePair": "en-de",
      "englishSentence": "What time is it?",
      "correctAnswer": "es"
  },
  {
      "id": "zYxWvUtSrQpOnMlKjIhG",
      "incompleteSentence": "Ich -- essen",
      "missingWord": {
          "index": 1,
          "options": [
              "hasse",
              "liebe",
              "mag",
              "bin"
          ]
      },
      "englishSentence": "I love food",
      "questionNumber": 12,
      "correctAnswer": "liebe",
      "languagePair": "en-de"
  }
]

export {
  translations,
  questions
}