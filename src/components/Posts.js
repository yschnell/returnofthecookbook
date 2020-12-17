import React from 'react';
import {Link} from 'react-router-dom'

const Posts = ({posts}) => {
   
return posts.map(post  =>  <li className="li"><Link to={`/returnofthecookbook/${post.sys.id}`} >{post.fields.recipeTitle}</Link></li>)
}

export default Posts

