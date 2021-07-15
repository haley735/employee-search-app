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
        this.onChangeSortCondition = this.onChangeSortCondition.bind(this);
        this.state = {employees: [], input_value: '', sort_by: ''};
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

    onChangeSortCondition(e){
        this.setState({
            sort_by: e.target.value
        });
    }

    editEmployeList(){
        console.log(this.state.sort_by)
        // determine to filter by department, job_title, or none
        const sorted_employees = this.state.sort_by.legnth === 0 ? this.state.employees : 
        (this.state.sort_by === 'department' ? this.state.employees.sort((a, b) => {
            if (a.department < b.department)
                return -1;
            if (a.department > b.department)
                return 1;
            return 0;
            }): 
            this.state.employees.sort((a, b) => {
                if (a.job_title < b.job_title)
                    return -1;
                if (a.job_title > b.job_title)
                    return 1;
                return 0;
        }));
        console.log(this.state.sort_by)
        // filter by name
        const filtered_name_employees = this.state.input_value.length === 0 ? sorted_employees : 
        sorted_employees.filter(employee => employee.last_name.toLowerCase().includes(this.state.input_value.toLowerCase()) || 
        employee.first_name.toLowerCase().includes(this.state.input_value.toLowerCase()));
        
        // map employee entries to headers in table
        return filtered_name_employees.map(function(currentEmployee, i){
            return <Employee employee={currentEmployee} key={i} />;
        });
    }
    
    render() {
        return (
            <div>
                <h3>Employee List</h3>
                <label htmlFor="search">Search by name</label>
                <input type="text" value={this.state.inputValue} onChange={this.onChangeFilterEmployee}/>
                <label>Sort By</label>
                <select id="filter_by" value={this.state.sort_by} onChange={this.onChangeSortCondition}>
                    <option value=""></option>
                    <option value="department">Department</option>
                    <option value="job_title">Job Title</option>
                </select>
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
