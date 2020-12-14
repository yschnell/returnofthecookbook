import React from 'react';
import Post from './Post';

const Posts = ({posts,input,include,setInclude}) => {
   
    //if(include) {
    return (
        <div>
            {posts.map((article, index) => <Post article={article} key={index} input={input}  include={include} setInclude={setInclude} />)}
        </div>
    )
} //else return <div>Do not find any recipe</div>
//}

export default Posts

