import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEmployee extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeDepartment = this.onChangeDepartment.bind(this);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            department: '',
            job_title: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeDepartment(e) {
        this.setState({
            department: e.target.value
        });
    }

    onChangeJobTitle(e){
        this.setState({
            job_title: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Employee First Name: ${this.state.first_name}`);
        console.log(`Employee Last Name: ${this.state.last_name}`);
        console.log(`Employee Department: ${this.state.department}`);
        console.log(`Employee Job Title: ${this.state.job_title}`);

        const newEmployee = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            department: this.state.department,
            job_title: this.state.job_title
        };

        axios.post('http://localhost:4000/employees/add', newEmployee)
            .then(res => console.log(res.data));
        
        this.setState({
            first_name: '',
            last_name: '',
            department: '',
            job_title: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Firstname: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.first_name}
                                onChange={this.onChangeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Lastname: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.last_name}
                                onChange={this.onChangeLastName}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="departmentOptions" 
                                    id="hr_department" 
                                    value="Human Resources"
                                    checked={this.state.department==='Human Resources'} 
                                    onChange={this.onChangeDepartment}
                                    />
                            <label className="form-check-label">Human Resources</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="departmentOptions" 
                                    id="finance_department" 
                                    value="Finance" 
                                    checked={this.state.department==='Finance'} 
                                    onChange={this.onChangeDepartment}
                                    />
                            <label className="form-check-label">Finance</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="departmentOptions" 
                                    id="engineering_department" 
                                    value="Engineering" 
                                    checked={this.state.department==='Engineering'} 
                                    onChange={this.onChangeDepartment}
                                    />
                            <label className="form-check-label">Engineering</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Job Title: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.job_title}
                                onChange={this.onChangeJobTitle}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Employee" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}