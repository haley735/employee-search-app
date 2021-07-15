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
            <br></br>
            <Link to={"/delete/"+props.employee._id}>Delete</Link>
        </td>
    </tr>
)

export default class Employees extends Component {

    constructor(props) {
        super(props);
        this.onChangeFilterEmployee = this.onChangeFilterEmployee.bind(this);
        this.state = {employees: [], input_value: ''};
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

    onChangeFilterEmployee(e){
        this.setState({
            input_value: e.target.value
        });
    }

    editEmployeList(){
        const filtered_employees = this.state.input_value.length === 0 ? this.state.employees : 
        this.state.employees.filter(employee => employee.last_name.toLowerCase().includes(this.state.input_value.toLowerCase()) || 
        employee.first_name.toLowerCase().includes(this.state.input_value.toLowerCase()))
        return filtered_employees.map(function(currentEmployee, i){
            return <Employee employee={currentEmployee} key={i} />;
        })
    }
    
    render() {
        return (
            <div>
                <h3>Employee List</h3>
                <label htmlFor="search"> Search</label>
                <input type="text" value={this.state.inputValue} onChange={this.onChangeFilterEmployee}/>
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
                        { this.editEmployeList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
