import React, { Component } from 'react';
import axios from 'axios';

export default class EditEmployee extends Component {

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
            job_title: '',
            location: '',
            email: '',
            phone_number: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/employees/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    department: response.data.department,
                    job_title: response.data.job_title,
                    location: response.data.location,
                    email: response.data.email,
                    phone_number: response.data.phone_number
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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

    onChangeJobTitle(e) {
        this.setState({
            job_title: e.target.value
        });
    }

    onChangeLocation(e){
        this.setState({
            location: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onChangePhoneNumber(e){
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            department: this.state.department,
            job_title: this.state.job_title
        };
        console.log(obj);
        axios.post('http://localhost:4000/employees/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.first_name}
                                onChange={this.onChangeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
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
                        <label>Location: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.location}
                                onChange={this.onChangeLocation}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email Address: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.phone_number}
                                onChange={this.onChangePhoneNumber}
                                />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Employee" className="btn btn-primary" />
                    </div>
                    
                </form>
            </div>
        )
    }
}