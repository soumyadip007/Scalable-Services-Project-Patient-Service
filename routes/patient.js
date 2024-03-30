const { Router } = require('express');
const patientController = require('../controllers/patient');
const router = Router();

/**
 * @route POST /patients
 * @desc Create a new patient
 * @access Internal
 */
router.post('/', patientController.create);

/**
 * @route GET /patients
 * @desc Get all patients
 * @access Internal
 */
router.get('/', patientController.readAll);

/**
 * @route GET /patients/:id
 * @desc Get a patient by ID
 * @access Internal
 */
router.get('/:id', patientController.read);

/**
 * @route PUT /patients/:id
 * @desc Update a patient by ID
 * @access Internal
 */
router.put('/:id', patientController.update);

/**
 * @route DELETE /patients/:id
 * @desc Delete a patient by ID
 * @access Internal
 */
router.delete('/:id', patientController.delete);

module.exports = router;
