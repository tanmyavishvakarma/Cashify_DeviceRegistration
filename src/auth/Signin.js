import React, { Component } from 'react'
import axios from 'axios'

class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    handleUsernameChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handleSubmit=(e)=>{
        axios.post('http://localhost:3000/signin',{
            username:this.state.username,
            password:this.state.password,
        }).then((response)=>{ 
           
        });
    }
    render(){
        return(
            <div>
                <div className="container ">
                    <form className="white">
                        <h1>
                            <h5 className="grey-text text-darken-3">Sign In</h5>
                            <div className="input-field">
                                <label htmlFor="username">Username</label>
                                <input type ="text" id="username" onChange={this.handleUsernameChange}></input>
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type ="password" id="password" onChange={this.handlePasswordChange}></input>
                            </div>
                            <div className="input-field">
                                <button onClick={this.handleSubmit} className="btn blue lighten-1 z-depth-0">Login</button>
                            </div>  
                        </h1>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signin