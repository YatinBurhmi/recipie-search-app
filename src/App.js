import React ,{Component} from 'react';
import './App.css';
import {recipes} from './tempList'
import RecipieList from './components/RecipieList'
import RecipieDetails from './components/RecipieDetails'

class App extends Component {

  state = {
    recipes : recipes,
    url: "https://www.food2fork.com/api/search?key=f83d06440abfb50c2a880e5c9af91da6",
    details_id : 35382,
    index:0
  }

  async getRecipies(){
    try{
      const data = await fetch(this.state.url)
      const jsonData = await data.json()
      this.setState({
        recipes: jsonData.recipes
      })
    }
    catch(error){
      console.log(error)
    }
  }

  componentDidMount(){
    this.getRecipies();
  }

  displayPage = (index)=>{
    switch(index){
      default:
        case 1:
          return(<RecipieList recipes={this.state.recipes} handelDetailsIndex={this.handelDetailsIndex}/>)
        case 0:
          return(<RecipieDetails id={this.state.details_id} handleIndex={this.handleIndex}/>)
    }
  }

  handleIndex = index => {
    this.setState({
      index:index
    })
  }

  handelDetailsIndex = (details,index) => {
    this.setState({
      details_id: details,
      index:index
    })
  }

  render(){
    console.log("State", this.state)
    return (
      <React.Fragment>
        {this.displayPage(this.state.index)}
      </React.Fragment>
    );
  }
}

export default App;
