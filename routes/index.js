import express from "express";
import  {getAllContacts}  from "../controller/index.js";
import  {getContact}  from "../controller/index.js";
import  {deleteContact} from "../controller/index.js";
import  {updateContact}  from "../controller/index.js";
import  {createContact}  from "../controller/index.js";


const appRouter = express.Router();

appRouter.get("/getallcontacts", getAllContacts);
appRouter.get("/getcontact/:id", getContact);
appRouter.post("/createcontact", createContact);
appRouter.put("/updatecontact/:id", updateContact);
appRouter.delete("/deletecontact/:id", deleteContact);


export default appRouter;




