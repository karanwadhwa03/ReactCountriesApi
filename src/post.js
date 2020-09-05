import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './App.css'


class Post extends Component{
   

  render(){
    return(
    
      <div className="col-md-6 p-5 col-xl-3 col-lg-4  border rounded " key={this.props.name} >
          <Link to={`/alpha/${this.props.data.alpha3Code}`} >
          <div className=" shadow-lg bg-white plzz ">
            <div >
                    <img src={this.props.data.flag} className="w-100 h-100"></img>
            </div>
            <div className="p-4">
    
            <h4><strong> {this.props.data.name}</strong> </h4>
            <p><strong>Population:</strong> {this.props.data.population}</p>
            <p><strong>Region:</strong> {this.props.data.region}</p>            
            <p><strong>Capital :</strong> {this.props.data.capital}</p>            

            </div>
            </div>
            </Link>
      </div>
      
    )


  }


}
export default Post