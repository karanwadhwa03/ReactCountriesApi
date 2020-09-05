import React, { Component } from 'react'
import Post from './post'
import Nav from './nav'
import axios from 'axios'
import Detail from './detail'
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom'


class App extends Component{
  
  state={
    initialposts:[],
    posts:[],
    dark:false
  }
  
  componentDidMount=()=>{
axios.get('https://restcountries.eu/rest/v2/all').then(
  response=>{
   console.log(response.data)
    this.setState({
      posts:response.data,
      initialposts:response.data
    })


  }
)
  }

  darked=()=>{
    console.log("jkj")
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  
  changedHandler=(e)=>{
      console.log(e.target.value);
      var check=e.target.value
      var use=[...this.state.initialposts];
      var use2=use.filter(
        str=>{
          return str.name.includes(check)
        }
      )
      console.log(use2)
      this.setState({
        posts:use2
      })
      


  }
   
  render(){
    


    
    var use=this.state.posts.map(
      el=>{

        return(
          <Post data={el} dark={this.state.dark}></Post>
        )


      }
    )



    return(
      <Router>
      
      <div>
      
      <Nav dark={this.darked} changed={this.changedHandler}></Nav>
      <Switch>
      <Route path='/alpha/:id' component={Detail}></Route>
      <div className="row ml-5 mt-4">
      {use}
      </div>
      </Switch>
      </div>
      </Router>
    )


  }


}
export default App