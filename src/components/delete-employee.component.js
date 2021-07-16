import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteEmployee extends Component {

    constructor(props) {
        super(props);

        //this.onSubmit = this.onSubmit.bind(this);

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

    deleteRow(data, e){  
        axios.delete('http://localhost:4000/employees/delete/'+this.props.match.params.id, data)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
          })  
          this.props.history.push('/');
      }  

    render() {
        return (
            <div>
                <h3 align="center">Delete Employee</h3>
                <form>
                    <div className="form-group"> 
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.first_name}
                                readOnly
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.last_name}
                                readOnly
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
                                    readOnly
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
                                    readOnly
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
                                    readOnly
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
                                readOnly
                                />
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.location}
                                readOnly
                                />
                    </div>
                    <div className="form-group">
                        <label>Email Address: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                readOnly
                                />
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.phone_number}
                                readOnly
                                />
                    </div>
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Delete Employee" onClick={(e)=> this.deleteRow(this.state, e)} className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}