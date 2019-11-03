import React, { Component } from 'react'
import {recipe} from '../tempDetails'

export default class RecipieDetails extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             recipe : recipe,
//             url : `https://www.food2fork.com/api/get?key=f83d06440abfb50c2a880e5c9af91da6&rId=${this.props.id}`
//         }
//     }

//   async componentDidMount(){
//       try{
//       const data = await fetch(this.state.url)
//       const jsonData = await data.json()
//       this.setState({
//         recipe: jsonData.recipe
//       })
//     }
//     catch(error){
//       console.log(error)
//     }
//   }

state = {
    recipe:recipe
}

async componentDidMount(){
    const id =  this.props.id;
    console.log(id)
    const url = `https://www.food2fork.com/api/get?key=f83d06440abfb50c2a880e5c9af91da6&rId=${id}`
    try{
       const data = await fetch(url)
       const jsonData = await data.json()
       console.log(jsonData)
       this.setState((state,props)=>{
         return { recipe: jsonData.recipe }
       },()=>{})
     }
     catch(error){
       console.log(error)
     }
}
    render() {
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe;
        console.log("state in recipeDetials", this.state)

        const{handleIndex} = this.props;
        return (
            <React.Fragment>
               <div className="container">
                   <div className="row">
                       <div className="col-10 mx-auto col-md-6 my-3">
                           <button type="button" 
                           onClick={()=>{handleIndex(1)}}
                           className="btn btn-warning mb-5 text-capitalize">
                               back to recipe list
                            </button>
                            <img src = {image_url}
                            alt = "recipe"
                            className="d-block w-100" />
                       </div>
                       <div className="col-10 mx-auto col-md-6 my-3">
                           <h6 className="text-uppercase">{title}</h6>
                           <h6 className="text-capitalize text-slanted text-danger">published by {publisher}</h6>
                           <a href = {publisher_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-2 mx-3 text-capitalize"
                            >publisher webpage</a>
                            <a href = {source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success mt-2 mx-3 text-capitalize"
                            >recipie url</a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">Ingredients</h2>
                                {ingredients.map((item,index)=>{
                                    return(
                                        <li key={index} className="list-group-item text-slanted">{item}</li>
                                    );
                                })}
                            </ul>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}
