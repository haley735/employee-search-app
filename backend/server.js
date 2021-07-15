const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Employee = require('./employee.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/employees', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const employeeRoutes = express.Router();

employeeRoutes.route('/').get(function(req, res) {
    Employee.find(function(err, employee) {
        if (err) {
            console.log(err);
        } else {
            res.json(employee);
        }
    });
});

employeeRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Employee.findById(id, function(err, employee) {
        res.json(employee);
    });
});

employeeRoutes.route('/add').post(function(req, res) {
    let employee = new Employee(req.body);
    employee.save()
        .then(employee => {
            res.status(200).json({'employee': 'employee added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new employee failed');
        });
});

employeeRoutes.route('/update/:id').post(function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
        if (!employee)
            res.status(404).send("data to update is not found");
        else
            employee.first_name = req.body.first_name;
            employee.last_name = req.body.last_name;
            employee.department = req.body.department;
            employee.job_title = req.body.job_title;

            employee.save().then(employee => {
                res.status(200).send('Employee updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

employeeRoutes.route('/delete/:id').delete(function(req, res){
    Employee.findByIdAndDelete(req.params.id, function(err, employee){
        if (!employee)
            res.status(404).send("data to delete is not found");
        else
            res.status(200).send('Employee has been deleted');

    })
})

app.use('/employees', employeeRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});