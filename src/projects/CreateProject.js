import React, { Component } from 'react'

class CreateProject extends Component{
    state={
        devicecompany:'',
        serialno:'',
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
                            <h5 className="grey-text text-darken-3">Create Project</h5>
                           
                            <div className="input-field">
                                <label htmlFor="serialno">Serial Number</label>
                                <input type ="text" id="serialno" onChange={this.handleChange}></input>
                            </div>
                            <div className="input-field">
                                <label htmlFor="devicecompany">Device Company</label>
                                <input type ="text" id="devicecompany" onChange={this.handleChange}></input>
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