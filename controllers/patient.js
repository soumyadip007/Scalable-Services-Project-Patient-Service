const patientService = require('../service/patientService');

module.exports.create = async (req, res) => {
    try {
        const patient = await patientService.createPatient(req.body);
        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.update = async (req, res) => {
    try {
        const updatedPatient = await patientService.updatePatient(req.params.id, req.body);
        res.json(updatedPatient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.delete = async (req, res) => {
    try {
        await patientService.deletePatient(req.params.id);
        res.json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.read = async (req, res) => {
    try {
        const patient = await patientService.getPatientById(req.params.id);
        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.readAll = async (req, res) => {
    try {
        const patients = await patientService.getAllPatients();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
