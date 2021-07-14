import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = props => (
    <tr>
        <td>{props.employee.first_name}</td>
        <td>{props.employee.last_name}</td>
        <td>{props.employee.department}</td>
        <td>{props.employee.job_title}</td>
        <td>
            <Link to={"/edit/"+props.employee._id}>Edit</Link>
        </td>
    </tr>
)

export default class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/employees/')
            .then(response => {
                this.setState({ employees: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    employeeList() {
        return this.state.employees.map(function(currentEmployee, i){
            return <Employee employee={currentEmployee} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Employee List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Department</th>
                            <th>Job Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.employeeList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
