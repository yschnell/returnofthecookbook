import React from 'react';
import marked from 'marked';
import {Link} from 'react-router-dom';


const Post = ({ article,input,include,setInclude,key }) => {
    console.log(article)
    const { recipeTitle, recipeCategory, recipePicture, recipeDescription, typicalRecipeLocation, recipeCountry } = article.fields
    const { id } = article.sys
    const postRecipeDescription = marked(recipeDescription)


    return (
        <div className='post'>
            <p className='title'><Link to= {`/${id}`} >{recipeTitle}</Link></p>
           {/* {recipePicture && <img className='picture' src={recipePicture.fields.file.url} alt={recipeTitle} title={recipeTitle} /> }
            <h4 className='category'>{recipeCategory}</h4>
            <section dangerouslySetInnerHTML={{ __html: postRecipeDescription }} />
    <h4 className='country'>{recipeCountry}</h4>*/}
            {/*<section>{typicalRecipeLocation}</section>*/}
        </div>
    )
}

Post.propTypes = {

}

export default Post
