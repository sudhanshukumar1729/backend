const express = require('express');
const router = express.Router();
const {getContacts,getContactsbyid,createContacts,updateContacts,deleteContacts} = require('../controller/contactController');

router.get('/',getContacts);

router.get('/:id',getContactsbyid);

router.post('/',createContacts);

router.put('/:id',updateContacts);

router.delete('/:id',deleteContacts);

module.exports = router;