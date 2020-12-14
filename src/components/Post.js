import React from 'react';
import marked from 'marked';


const Post = ({ article }) => {
    console.log(article)
    const { recipeTitle, recipeCategory, recipePicture, recipeDescription, typicalRecipeLocation, recipeCountry } = article.fields
    const postRecipeDescription = marked(recipeDescription)
    return (
        <div className='post'>
            <h2 className='title'>{recipeTitle}</h2>
            {recipePicture && <img className='picture' src={recipePicture.fields.file.url} alt={recipeTitle} title={recipeTitle} /> }
            <h4 className='category'>{recipeCategory}</h4>
            <section dangerouslySetInnerHTML={{ __html: postRecipeDescription }} />
            <h4 className='country'>{recipeCountry}</h4>
            {/*<section>{typicalRecipeLocation}</section>*/}
        </div>
    )
}

Post.propTypes = {

}

export default Post
