const express= require('express');
const router= express.Router();
const Contact=require('../models/contact');

/*router.get('/Contacts',(req,res,next)=>{
    res.send("ghada is")
    console.log("working");
  });*/
//retrievingcontacts

router.get('/Contacts',(req,res,next)=>{
 Contact.find(function(err,contact){
     res.json(contact);
 })
});
//adding contact
router.post('/contact',(req,res,next)=>{
    //logic to add contact
    let newContact = new contact({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phonenum:req.body.phonenum
    });
    // save the new contact
    newContact.save((err,contact)=>{
        if(err)
        {
            res.json({msg:'failed to add contact'});
        }
        else{
            res.json({msg:'successed to add contact'});
        }
    });
    
});
//deleting contact
router.delete('/contact',(req,res,next)=>{
    Contact.remove({_id:req.param.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            es.json(result);
        }
    });

});
//updating contact
router.put('/contact/:id',(req,res,next)=>{
 
    
});

module.exports = router;