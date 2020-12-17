import React from 'react';
import {Link, NavLink} from 'react-router-dom'



const Posts = ({posts}) => {
   
return posts.map(post  =>  
    <div className="sidebar__recipe">
            <NavLink  style={{ textDecoration: 'none', color:"black" }} activeClassName="selected"  to={`/returnofthecookbook/${post.sys.id}`} >
                <li className="li">{post.fields.recipeTitle}</li>
            </NavLink>
    </div> 
 )
}

export default Posts

