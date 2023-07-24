/**
 * This file will contain the schema of the user model
 */

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        require: true
    },
    dateOfBirth: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true,
        enum: ['male', 'female', 'others']
    },
    bloodGroup: {
        type: String,
        require: true
    },
    mobileNo: {
        type: String,
        require: true
    },
    mobileNo2: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    backUpEmail: {
        type: String,
        lowercase: true
    },    
    password: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        enum: ['ADMIN', 'INSTRUCTOR']
    },
    userStatus: {
        type: String,
        required: true,
        default: "ACTIVE",
        enum: ['ACTIVE', 'INACTIVE']
    },
    image: {
        type: String,
    },
    pastOrganizations: {
        type: [String]
    },
    reasonOfLeaving: {
        type: String
    },
    martialStyles: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: () => {
            return Date.now();
        },
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    },
});

module.exports = mongoose.model("Users", userSchema);