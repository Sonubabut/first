import mongoose from "mongoose";

const statusSchema = new mongoose.Schema({     
    grade: { 
        type: String, 
        required: true
    },
    fees: {
        type: String,
        required: true
    },
    coursesAvailable: {
        type: String,
        required: true
    }
})

const StatusModel = mongoose.model('Status', statusSchema);

export default StatusModel;