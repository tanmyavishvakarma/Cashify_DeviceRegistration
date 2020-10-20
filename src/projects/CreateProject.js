
import React, { Component } from 'react'
import axios from 'axios';

class CreateProject extends Component{
    constructor(props){
        super(props);
        this.state={
            serialno:'',
            modelname:'',
            brand:''
           
        }
      
    }
    handleSerialnoChange = (e) => {
        this.setState({
          serialno: e.target.value,
      
        })
      
      }
      handleBrandChange = (e) => {
        this.setState({
          brand: e.target.value,
      
        })
      
      }
      handleModelChange = (e) => {
        this.setState({
          modelname: e.target.value,
      
        })
      
      }


    handlesubmit=(e)=>{  
        

        e.preventDefault();
   
         axios.post('http://localhost:3000/addproject',{
           serialno:this.state.serialno,
           brand:this.state.brand,
           modelname:this.state.modelname,
         }).then(()=>{ 
           alert("suc")
         //  console.log(this.name);
         });
       
        }
       



render(){
    
    return(
        <div>
            <div className="container ">
                <form className="white" >
                    
                        <h5 className="grey-text text-darken-3">Create Project</h5>
                       
                        <div className="input-field">
                            <label htmlFor="serialno">Serial Number</label>
                            <input  id="serialno"  type ="text" name="serialno"  onChange={this.handleSerialnoChange}></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="brand">Brand</label>
                            <input  id="brand"type ="text" name="brand"  onChange={this.handleBrandChange}></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="modelname">Model Name</label>
                            <input  id="modelname" type ="text" name="modelname"  onChange={this.handleModelChange}></input>
                        </div>
                        <div className="input-field">
                            <button  onClick={this.handlesubmit} className="btn blue lighten-1 z-depth-0">Add Project</button>
                        </div>  
                    
                </form>
            </div>
        </div>
    )
}
}
export default CreateProject