import React from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import {setSearchField, requestRobots} from '../actions';
// from reducer
const mapStateToProps = state =>{
  return{
    
    searchField: state.searchRobots.searchField,
    isPending: state.getRobots.isPending,
    robots: state.getRobots.robots,
    error: state.getRobots.error
  }
}
// from action
const mapDispatchToProps = (dispatch) =>{
  return{
    onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}
class App extends React.Component  {
  // constructor(){
  //   super();
  //   this.state = {
  //     robots:[],
  //     // searchfield:'',

  //   }
  // }

  componentDidMount(){
      this.props.onRequestRobots()

    // console.log(this.props.store.getState())
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response =>{
    //     return response.json()
    //   })
    //   .then(users =>{
    //     this.setState({robots:users});
       
    //   })
      
  }
  // onSearchChange = (event) => {
  //   this.setState({searchfield: event.target.value})
    

  // }
  render(){
    console.log('phuong', this.props)
   const {searchField, onSearchChange,robots, isPending} = this.props
   const filteredRobots = robots.filter((robot) =>{
     return robot.name.toLowerCase().includes(searchField.toLowerCase())
     
   })
   
    return isPending ?
    <h1>Loading</h1> :
    (
      <div className="App">
        <h1>ROBOFRIENDS</h1>
        <SearchBox  searchChange={onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
