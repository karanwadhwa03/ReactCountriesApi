import React, { Component } from 'react'
import './App.css'
class Nav extends Component{


    render(){
        
        

        return(
            <div>
            <div className="row p-4 shadow-lg rounded align-items-center ">
                <div className="col">
                        <h1>Where In The World ??</h1>
                </div>
                <div className="col text-right mypointer">
                    <h4 onClick={this.props.dark}><i class="fa fa-moon-o"></i>  Dark Mode</h4>
                </div>
                


            </div>

            <div className="mt-5 ml-5">

                <div className="input-group  mb-3 shadow w-25 ">
                    <div className="input-group-prepend">
                    <span className="input-group-text bg-white " id="inputGroup-sizing-default"><i class="fa fa-search"></i></span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" onChange={this.props.changed} aria-describedby="inputGroup-sizing-default" placeholder="Seacr for a country"></input>
                </div>

                
            </div>
            </div>


        )


    }


}
export default Nav