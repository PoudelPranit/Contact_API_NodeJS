import {find,findById, create, update} from "../database/query.js";

export  const getAllContacts = async (req,res) => {
    try {
        const contacts = await find();
        console.log(contacts);
        return res.json({contacts});
    } catch (error) {
        console.log(error);
    }
};

export const getContact = async (req,res) => {
    try {
        const contact = await findById(req.params.id);
        console.log(contact);
        return res.json({contact});
    } catch (error) {
        console.log(error);
    }
};

export const createContact = async (req,res) => {
    const {contactId, name, number, email, message}= req.body;

    if (!name || !number || !email || !message){
        return res.status(403).json({message :"body not provided"});
    }
    try {
        const contact = await create(contactId,name, number, email, message);
        return res.status(403).json({contact});
        
    } catch (error) {
        console.log(error);
    }
};

export const updateContact = async (req,res) => {
    const {name, number, email, message}= req.body;

    if (!name || !number || !email || !message){
        return res.status(403).json({message :"body not provided"});
    }
    try {
        const contact = await update(req.params.id,name, number, email, message);
        return res.status(403).json({contact});

    } catch (error) {
        console.log(error);
    }
};

export const deleteContact = async (req,res) => {};
