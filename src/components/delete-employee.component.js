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
            job_title: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/employees/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    department: response.data.department,
                    job_title: response.data.job_title
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // componentDidMount() {
    //     // Simple DELETE request with axios
    //     axios.delete('http://localhost:4000/employees/delete'+this.props.match.params.id)
    //         .then(() => this.setState({ status: 'Delete successful' }));
    // }

    // onSubmit(e) {
    //     e.preventDefault();
    //     const obj = {
    //         first_name: this.state.first_name,
    //         last_name: this.state.last_name,
    //         department: this.state.department,
    //         job_title: this.state.job_title
    //     };

        
    //     console.log(obj);
    //     axios.post('http://localhost:4000/employees/delete/'+this.props.match.params.id, {obj})
    //         .then(res => console.log(res.data));
        
    //     this.props.history.push('/');
    // }

    deleteRow(data, e){  
        axios.delete('http://localhost:4000/employees/delete/'+this.props.match.params.id, data)  
          .then(res => {  
            console.log(res);  
            console.log(res.data);  
        
            // const posts = this.state.posts.filter(item => item.id !== id);  
            // this.setState({ posts });  
          })  
          this.props.history.push('/');
      }  

    render() {
        return (
            <div>
                <h3 align="center">Delete Employee</h3>
                {/* <form onSubmit={this.onSubmit}> */}
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
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Delete Employee" onClick={(e)=> this.deleteRow(this.state, e)} className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}