const router=require('express').Router();
const contact = require("./Contact/Contact");
router.post("/contact",contact);
module.exports=router;