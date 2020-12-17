import React from 'react';
import Post from './Post';
import {Link} from 'react-router-dom'

const Posts = ({posts,input,include,setInclude}) => {
   
    //if(include) {
return posts.map(post  =>  <li className="li"><Link to={`/${post.sys.id}`} >{post.fields.recipeTitle}</Link></li>)

    /*{article.fields.recipeTitle}*/


    {/*<div>
            {posts.map((article, index) => <Post article={article} key={index} input={input}  include={include} setInclude={setInclude} />)}
        </div> */} 
    
} //else return <div>Do not find any recipe</div>
//}

export default Posts

