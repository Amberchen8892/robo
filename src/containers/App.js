import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      robots:[],
      searchfield:'',

    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
        return response.json()
      })
      .then(users =>{
        this.setState({robots:users});
       
      })
      
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    

  }
  render(){
   console.log(this.state.searchfield)
   const filteredRobots = this.state.robots.filter((robot) =>{
     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     
   })
   
    return !this.state.robots.length ?
    <h1>Loading</h1> :
    (
      <div className="App">
        <h1>ROBOFRIENDS</h1>
        <SearchBox  searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
  
}

export default App;
