const express = require('express');
const router = express.Router();
const Persons = require('./PersonsSchema');

// router.get('/', (req,res) => {
//     res.json("Router is working");
// })

//Create a record
router.post('/', async(req,res) => {
    console.log('Inside adduser');

    try{
    const postPerson = new Persons({
        Name: req.body.Name,
        Age: req.body.Age,
        Password: req.body.Password
    });
    const savePerson = await postPerson.save();
    res.json(savePerson);
    }
    catch(err){
        res.json(err);
    }
});

//Display al records
router.get('/', async(req,res) => {
    try{
        const getAll = await Persons.find();
        res.json(getAll);
        }
        catch(err){
            res.json(err);
        }
});


router.get('/log', (req,res) => {
    console.log('Inside login');
    res.json("Inside login");
});

//Display one particular record
router.get('/:id', async(req,res) => {
    try{
        const getById = await Persons.findById(req.params.id);
        res.json(getById);
        }
        catch(err){
            res.json(err);
        }
});

//Update a record
router.put('/:id', async(req,res) => {
    try{
        const updatePerson = await Persons.updateOne({id:req.params.id}, {$set:{Name: req.body.Name, Age:req.body.Age, Password:req.body.Password}});
        res.json(updatePerson);
        }
        catch(err){
            res.json(err);
        }
});

//Delete a record
router.delete('/:id', async(req,res) => {
    console.log(req.params.id);
    try{
        const deletePerson = await Persons.findOneAndRemove({id: req.params.id});
        res.json(deletePerson.Name + " record deleted");
        }
        catch(err){
            res.json(err);
        }
});

//login
router.get('/login', (req,res) => {
    const userName = req.body.userName;
    const password = re.body.password;
});


module.exports = router;