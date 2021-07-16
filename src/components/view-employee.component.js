import React, { Component } from 'react';
import axios from 'axios';
import logo from "../logo.svg"

export default class ViewEmployee extends Component {

    constructor(props) {
        super(props);

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

    render(){
        return(
            <div>
                <h3>Employee Profile</h3>
                <table className="table table-striped">
                    <thead className="d-inline" style={{ height: 40.5 }}>
                        <tr>
                            <th colSpan="1">First Name</th>
                        </tr>
                        <tr style={{ height: 40.5 }}>
                            <th colSpan="1">Last Name</th>
                        </tr>
                        <tr style={{ height: 40.5 }}>
                            <th colSpan="1">Department</th>
                        </tr>
                        <tr style={{ height: 40.5 }}> 
                            <th colSpan="1">Job Title</th>
                        </tr>
                        <tr style={{ height: 40.5 }}>
                            <th colSpan="1">Location</th>
                        </tr>
                        <tr style={{ height: 40.5 }}>
                            <th colSpan="1">Email</th>
                        </tr>
                        <tr style={{ height: 40.5 }}>
                            <th colSpan="1">Phone</th>
                        </tr>
                    </thead>
                    <tbody className="d-inline" >
                        <tr>
                            <td style={{ height: 40.5 }}>{this.state.first_name}</td>
                        </tr>
                        <tr>
                            <td style={{ height: 40.5 }}>{this.state.last_name}</td>
                        </tr>
                        <tr>
                            <td style={{ height: 40.5 }}>{this.state.department}</td>
                        </tr>
                        <tr>
                            <td style={{ height: 40.5 }}>{this.state.job_title}</td>
                        </tr>
                        <tr>
                            <td style={{ height: 40.5 }}>{this.state.location}</td>
                        </tr>
                        <tr>
                            <td style={{ height: 40.5 }}>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td style={{ height: 40.5 }}>{this.state.phone_number}</td>
                        </tr>
                    </tbody>
                </table>
                <img source={logo} width="50" height="50" alt="Employee Profile"></img>
            </div>
        )
    }
}