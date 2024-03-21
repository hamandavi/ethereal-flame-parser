# ethereal-flame-parser

A JavaScript library for parsing HTML using htmlparser2.

## Installation

```bash
npm install ethereal-flame-parser
```

## Usage

```javascript
const { parseHTML, extractTextFromHTML, extractAttributesFromHTML } = require('ethereal-flame-parser');

// Example HTML string
const htmlString = '<div>Hello, world!</div>';

// Parse the HTML string
parseHTML(htmlString);

// Extract text content from HTML string
extractTextFromHTML(htmlString);

// Extract attributes from HTML string
extractAttributesFromHTML(htmlString);
```

## API

### `parseHTML(htmlString: string): void`

Parses the provided HTML string and logs the resulting DOM tree to the console.

### `extractTextFromHTML(htmlString: string): void`

Extracts text content from the provided HTML string and logs it to the console.

### `extractAttributesFromHTML(htmlString: string): void`

Extracts attributes from the provided HTML string and logs them to the console.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
