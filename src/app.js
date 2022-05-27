const express = require('express');

const app = express();

const notas = [

  {
    id: 1,
    nota: 'Nota 1',
  },
  {
    id: 1,
    nota: 'Nota 2',
  },
  {
    id: 1,
    nota: 'Nota 3',
  },
];

app.get('/notas', (req, res) => {
  res.json(notas);
});

module.exports = app;
