import { database } from '../firbase/firebase';
import React, { Component } from 'react'

class CreateProject extends Component{
    constructor(props){
        super(props);
            this.state={
                serialno:'',
                devicecompany:''
            };
        this.onInputChange=this.onInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    onInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const post={
            serialno:this.state.serialno,
            devicecompany:this.state.devicecompany
        };
        database.push(post)
    }


    render(){
        return(
            <div>
                <div className="container ">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h1>
                            <h5 className="grey-text text-darken-3">Create Project</h5>
                           
                            <div className="input-field">
                                <label htmlFor="serialno">Serial Number</label>
                                <input type ="text" name="serialno" onChange={this.onInputChange}></input>
                            </div>
                            <div className="input-field">
                                <label htmlFor="devicecompany">Device Company</label>
                                <input type ="text" name="devicecompany" onChange={this.onInputChange}></input>
                            </div>
                            <div className="input-field">
                                <button className="btn blue lighten-1 z-depth-0">Add Project</button>
                            </div>  
                        </h1>
                    </form>
                </div>
            </div>
        )
    }
}
export default CreateProject