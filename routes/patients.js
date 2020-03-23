var express = require('express')
var patientsRouter = express.Router()
var patientsController = require('../controller/patientsController')

patientsRouter.get('/', patientsController.patients)

patientsRouter.get('/:patientId', patientsController.patient)


module.exports = patientsRouter