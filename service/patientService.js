const Patient = require('../mongoose');

module.exports.createPatient = async (patientData) => {
    const patient = new Patient(patientData);
    return await patient.save();
};

module.exports.updatePatient = async (id, patientData) => {
    return await Patient.findByIdAndUpdate(id, patientData, { new: true });
};

module.exports.deletePatient = async (id) => {
    return await Patient.findByIdAndDelete(id);
};

module.exports.getPatientById = async (id) => {
    return await Patient.findById(id);
};

module.exports.getAllPatients = async () => {
    return await Patient.find();
};
