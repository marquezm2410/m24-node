const express = require('express');

const app = express();

const notas = [




  {
    id: 1,
    nota: 'Nota 1',
  },
  {
    id: 2,
    nota: 'Nota 2',
  },
  {
    id: 3,
    nota: 'Nota 3',
  },
  {
    id: 4,
    nota: 'Nota 4',
  },
  {
    id: 5,
    nota: 'Nota 5',
  },
  {
    id: 6,
    nota: 'Nota 6',
  },
];

app.get('/notas', (req, res) => {
  res.json(notas);
});

module.exports = app;
