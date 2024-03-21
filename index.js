const htmlparser = require('htmlparser2');

// Function to parse HTML string
function parseHTML(htmlString) {
  const handler = new htmlparser.DomHandler(function (error, dom) {
    if (error) {
      console.error(error);
    } else {
      console.log(dom);
    }
  });
  const parser = new htmlparser.Parser(handler);
  parser.write(htmlString);
  parser.end();
}

// Function to extract text content from HTML string
function extractTextFromHTML(htmlString) {
  const textHandler = new htmlparser.DomHandler(function (error, dom) {
    if (error) {
      console.error(error);
    } else {
      let textContent = '';
      dom.forEach(node => {
        if (node.type === 'text') {
          textContent += node.data.trim() + ' ';
        }
      });
      console.log(textContent);
    }
  });
  const textParser = new htmlparser.Parser(textHandler);
  textParser.write(htmlString);
  textParser.end();
}

// Function to extract attributes from HTML string
function extractAttributesFromHTML(htmlString) {
  const attributeHandler = new htmlparser.DomHandler(function (error, dom) {
    if (error) {
      console.error(error);
    } else {
      let attributes = [];
      dom.forEach(node => {
        if (node.attribs) {
          attributes.push(node.attribs);
        }
      });
      console.log(attributes);
    }
  });
  const attributeParser = new htmlparser.Parser(attributeHandler);
  attributeParser.write(htmlString);
  attributeParser.end();
}

// Exported functions
module.exports = {
  htmlparser,
  parseHTML,
  extractTextFromHTML,
  extractAttributesFromHTML
}
