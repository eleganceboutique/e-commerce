require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});


const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App');

const app = express();

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(App);
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Elegance Boutique</title>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
  `);
});

app.listen(3001, () => {
  console.log('Servidor está rodando na porta 3001');
});
