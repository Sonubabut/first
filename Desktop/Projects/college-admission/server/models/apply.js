import mongoose from "mongoose";

const applySchema = new mongoose.Schema({

    name: { 
        type: String, 
        required: true 
    },
    fatherName: { 
        type: String, 
        required: true 
    },
    emailId: { 
        type: String, 
        required: true 
    },
    dob: { 
        type: String, 
        required: true 
    },
    gender: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    phoneNumber: { 
        type: String, 
        required: true 
    },
    schoolName: { 
        type: String, 
        required: true 
    },
    hscPercent: { 
        type: Number, 
        required: true 
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    sub: { 
        type: Boolean, 
        required: true, 
        default: false
    }
})

const ApplyModel = mongoose.model('Apply', applySchema);

export default ApplyModel;