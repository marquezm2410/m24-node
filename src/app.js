const express = require('express');

const app = express();

const notas = [

  {
    id: 1,
    nota: 'Nota 1',
  },
];

app.get('/notas', (req, res) => {
  res.json(notas);
});

module.exports = app;
