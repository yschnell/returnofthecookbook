import React from 'react';
import marked from 'marked';


const Post = ({ article,input,include,setInclude }) => {
    //console.log(article)
    const { recipeTitle, recipeCategory, recipePicture, recipeDescription, typicalRecipeLocation, recipeCountry } = article.fields
    const postRecipeDescription = marked(recipeDescription)

    //setInclude(recipeTitle.includes(input));
    //console.log(`Post if ${recipeTitle.includes(input)}`);
    //console.log(`Post include ${include}`)

   // if(recipeTitle.includes(input)) {

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
    //} else return <div></div>
}

Post.propTypes = {

}

export default Post
