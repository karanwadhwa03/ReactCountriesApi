import React,{Component} from 'react'
import axios from 'axios'

class Detail extends Component{
    state={
        require:{}
    }
    componentDidMount(){
        axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.id}`).then(
            response=>{
               // console.log(response)
                this.setState({
                    require:response.data
                })
            }
        )


    }
render(){

    return (
        <div className="ml-5 mt-5 row justify-content-around ">
                <div className="col-md-4">
                    <img src={this.state.require.flag} className="w-100 "></img>
    
                </div>
                <div className="col-md-6">
                    <h1><strong>{this.state.require.name}</strong></h1>
                    <h4><strong>Population: </strong> {this.state.require.population}</h4>
                    <h4><strong>Region: </strong> {this.state.require.region}</h4>
                    
                    {console.log(this.state.require.currencies)}
                    
                </div>
        </div>
    )
}

}
export default Detail