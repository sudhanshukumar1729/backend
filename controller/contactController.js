
const asyncHandler = require("express-async-handler");

const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    console.log("here are the contacts details");
    res.json(contacts);
});

const getContactsbyid = asyncHandler(async (req,res)=>{
    res.json({message:`get contacts details for id ${req.params.id}`});
});

const createContacts = asyncHandler(async (req,res)=>{
    console.log("here are the contacts details");
    console.log("request body",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all fields are required");
    }

    const contact = await Contact.create({
        name,email,phone,
    });
    res.json(contact);
});

const updateContacts = asyncHandler(async (req,res)=>{
    console.log(`update for id ${req.params.id}'`);
    res.json({message:`update for id ${req.params.id}`});
});

const deleteContacts = asyncHandler(async (req,res)=>{
    console.log("here are the contacts details");
    res.json({message:`delete for id ${req.params.id}`});
});

module.exports = {getContacts,getContactsbyid,createContacts,updateContacts,deleteContacts};
