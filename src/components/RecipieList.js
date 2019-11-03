import React, { Component } from 'react'
import Recipie from './Recipie';
import RecipieSearch from './RecipieSearch';
import { recipe } from '../tempDetails';

export default class RecipieList extends Component {
    render() {
        console.log("propsList", this.props)
        const { recipes, handelDetailsIndex } = this.props;
        return (
            <React.Fragment>
                <RecipieSearch />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">Recipie List</h1>
                        </div>
                    </div>
                    <div className="row">
                        {recipes.map(recipe => {
                            return <Recipie
                                key={recipe.recipe_id}
                                recipe={recipe}
                                handleDetailsIndex={ handelDetailsIndex} />
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
