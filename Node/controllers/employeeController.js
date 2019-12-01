const express = require('express');
var router = express.Router();

var { Employee } = require('../models/employee.js');

//=> localhost: 3000/employees/
router.get('/', (req, res)=> {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2));
    }
    });
});

router.get('/:id', (req,res) => {
    if(!ObjectId.isValid(req.param.id))
        return res.status(400).send('No record with given id : ' + $(req.param.id));

    Employee.findById(req.params.id, (err, doc) => {
        if(!err) { res. send(doc); }
        else { console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Employee( {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        phoneNO: req.body.phoneNO,
        email: req.body.email,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    emp.save((err, doc) => {
        if(!err) { res.send(doc); }
        else { consolel.log('Error in Employee save : '+ JSON.stringify(err, undefined,2)); }
    });

});

module.exports = router;