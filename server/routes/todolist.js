const express = require('express');
const bodyParser = require('body-parser');
const Users = require('../models/users');
const authenticate = require('../authenticate');
const router = express.Router();
router.use(bodyParser.json());


router.post('/delete',authenticate.verifyUser, async (req, res) => {
    let taskId = req.body.id;
    await Users.update({_id : req.user._id},{$pull: {"tasks": {id : taskId }}},(err,result)=>{
        if (err)
            res.status(400).send('error');
        else
            res.status(200).send('good');
    })
});

router.get('/',authenticate.verifyUser, async (req, res) => {
    const todo = await Users.findOne({_id: req.user._id},'tasks');
    res.send(todo || []);
});


router.put('/create',authenticate.verifyUser, async (req, res) => {
  await Users.updateOne({_id : req.user._id},{$addToSet: {tasks: req.body}},(err,result)=>{
        if (err)
            res.status(400).send('error');
        else
            res.status(200).send('good');
    })
});

router.post('/complete',authenticate.verifyUser, async (req, res) => {
    const todo = await Users.findById(req.body.id);
    todo.completed = !todo.completed;
    await todo.save();
    Users.findOne({login : 'gregr'},{"tasks" : {id : 1597058721743}},(err,result)=>{
        console.log(result);
    })
});
router.put('/change',authenticate.verifyUser, async  (req, res) => {

});

module.exports = router;