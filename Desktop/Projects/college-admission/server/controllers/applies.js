import { ObjectId } from "mongodb";
import Apply from "../models/apply.js";
import StatusModel from "../models/status.js";



export const getDetails = async (req, res) => {
    try{
        const applies = await Apply.find()
        res.status(200).json(applies);
    }catch(err) {
        res.send("Something went wrong");
    }
 };

 export const getDetailsById = async (req, res) => {
    try{
        const apply = await Apply.findById(req.params.id)
        res.status(200).json(apply);
    }catch(err){
        res.send('Invalid ID')
    }
 };


 export const createDetails = async (req, res) => {
    try {
        const token = req.cookies.access_token;
        const apply = new Apply({
            name: req.body.name,
            fatherName: req.body.fatherName,
            emailId: req.body.emailId,
            dob: req.body.dob,
            gender: req.body.gender,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            schoolName: req.body.schoolName,
            hscPercent: req.body.hscPercent,
            sub: req.body.sub
        })

        await apply.save()
        // res.status(200).send("Application submitted successfully!")
        
        let percentage = apply.hscPercent;
        if (percentage <= 100 && percentage >= 90) {
            const newStatus = new StatusModel({
                grade: "Grade A",
                fees: "25,000",
                coursesAvailable: "ECE, EEE, CSE, IT, MECH, AI, AERONAUTICAL",
            })
            await newStatus.save()
            res.send({message: {"Grade": "Grade A", "Fees": "25,000", "Courses Available": "ECE, EEE, CSE, IT, MECH, AI, AERONAUTICAL"}});
        } else if (percentage <= 89 && percentage >= 70) {
            const newStatus = new StatusModel({
                grade: "Grade B",
                fees: "50,000",
                coursesAvailable: "MECH, CSE, IT",
            })
            await newStatus.save()
            res.send({message: {"Grade": "Grade B", "Fees": "50,000", "Courses Available": "MECH, CSE, IT"}});
        } else if (percentage <= 69 && percentage >= 50) {
            const newStatus = new StatusModel({
                grade: "Grade C",
                fees: "1,00,000",
                coursesAvailable: "EEE, MECH, AI",
            })
            res.send({message: {"Grade": "Grade C", "Fees": "1,00,000", "Courses Available": "EEE, MECH, AI"}});
        } else if (percentage <= 49 && percentage >= 35){
            const newStatus = new StatusModel({
                grade: "Management",
                fees: "2,00,000",
                coursesAvailable: "EEE, ECE, CSE, IT, MECH, AI, AERONAUTICAL",
            })
            res.send({message: {"Grade": "Management", "Fees": "2,00,000", "Courses Available": "EEE, ECE, CSE, IT, MECH, AI, AERONAUTICAL"}});
        } else {
            res.send({message: {"status": "not eligible"}});
        }
        
    } catch (error) {
        res.send("error")
    }
};

export const updateDetails = async (req, res) => {

    try{
        const apply = await Apply.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
        res.status(200).json(apply)
    } catch{
        res.send('Invalid ID')
    }
};

export const deleteDetails = async (req, res) => {
    try{
        const deleteDetails = await Apply.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteDetails)
    }catch(err) {
        res.send('Something went wrong.')
    }
};