import React from 'react';

export default function Form({input,setInput,posts,setFiltered}) {

    function onChangeHandler(e) {
        setInput(e.target.value)
        setFiltered(posts.filter(article=> article.fields.recipeTitle.toLowerCase().includes(e.target.value.toLowerCase()) )  ) //ask fey
        console.log(posts)
    } 

    //

    return <input onChange={onChangeHandler} value= {input}/>
}

