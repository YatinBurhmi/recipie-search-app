import React, { Component } from 'react'

export default class Recipie extends Component {
    render() {
        console.log(this.props.recipe)
        const {
            image_url,
            title,
            publisher,
            source_url,
            recipe_id
        } = this.props.recipe;

        const{handleDetailsIndex} = this.props;
        
        return (
            <React.Fragment>
               <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img
                        src = {image_url}   
                        className = "img-card-top"
                        style = {{height:"14rem"}}
                        alt = "recipie"
                        />
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-danger text-slanted">
                                published by {publisher}
                            </h6>
                        </div>
                        <div className="card-footer">
                            <button type="button" 
                            onClick={()=>handleDetailsIndex(recipe_id,1)}
                            className="btn btn-primary text-capitalize">
                                details
                            </button>
                            <a href = {source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success mx-2 text-capitalize"
                            >recipie source</a>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}
