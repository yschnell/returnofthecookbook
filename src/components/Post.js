import React from 'react';
import marked from 'marked';
import {Link, useParams} from 'react-router-dom';


const Post = ({ posts}) => {

    const {id} = useParams();
   // console.log(posts);
   // const post= posts.map(article =>  {article.find(article.sys.id===id )})

   const post= posts.find(article => (article.sys.id===id ))


    console.log(post);
   // console.log(article)
   const { recipeTitle, recipeCategory, recipePicture, recipeDescription, typicalRecipeLocation, recipeCountry } = post.fields
  const postRecipeDescription = marked(recipeDescription)


    return (
        <div className='post'>
            <p className='title'><Link to= {`/${post.sys.id}`} >{recipeTitle}</Link></p> 
    {recipePicture && <img className='picture' src={recipePicture.fields.file.url} alt={recipeTitle} title={recipeTitle} /> }


           
            <h4 className='category'>{recipeCategory}</h4>
            <section dangerouslySetInnerHTML={{ __html: postRecipeDescription }} />
            <h4 className='country'>{recipeCountry}</h4>

        </div>
    )
}




export default Post
