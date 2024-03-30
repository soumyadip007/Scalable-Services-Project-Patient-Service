const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
    },
    bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true,
    },
    allergies: [{
        type: String,
    }],
    medicalHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MedicalRecord',
        }
    ],
    emergencyContact: {
        name: String,
        relationship: String,
        phoneNumber: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

// Optionally, you can update the `updatedAt` field whenever the document is updated.
patientSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
