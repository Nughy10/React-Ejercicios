const express = require('express');
const { getAllRaces, getRace, postNewRace, putRace, deleteRace } = require('./race.controller');

const RaceRoutes = express.Router();

//Podemos usar la misma ruta para distintos metodos, tanto POST, PUT, DELETE, GET pueden usar la misma ruta dado que son metodos distintos
RaceRoutes.get('/', getAllRaces);
RaceRoutes.get('/:id', getRace);
RaceRoutes.post('/', postNewRace);
RaceRoutes.put('/:id', putRace);
RaceRoutes.delete('/:id', deleteRace);

module.exports = RaceRoutes;