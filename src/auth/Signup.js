import React, { Component } from 'react'

class Signup extends Component{
    state={
        email:'',
        password:'',
        firstname:'',
        lastname:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target   .id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }


    render(){
        return(
            <div>
                <div className="container ">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h1>
                            <h5 className="grey-text text-darken-3">Sign Up</h5>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type ="email" id="email" onChange={this.handleChange}></input>
                            </div>
                            <div className="input-field">
                                <label htmlFor="firstname">First Name</label>
                                <input type ="text" id="firstname" onChange={this.handleChange}></input>
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastname">Last Name</label>
                                <input type ="text" id="lastname" onChange={this.handleChange}></input>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type ="password" id="password" onChange={this.handleChange}></input>
                            </div>
                            <div className="input-field">
                                <button className="btn blue lighten-1 z-depth-0">Sign Up </button>
                            </div>  
                        </h1>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signup