import React from 'react';

export default function Form({input,setInput,posts,setArticles,filtered,setFiltered}) {

    function onChangeHandler(e) {
        setInput(e.target.value)
        //console.log(`onhandle ${input}`)
        //console.log(posts)
        //setFiltered(posts)
        //console.log(filtered)
        setFiltered(posts.filter(article=> article.fields.recipeTitle.toLowerCase().includes(e.target.value.toLowerCase()) )  ) //ask fey
        console.log(posts)
    } 

    //

    return <input onChange={onChangeHandler} value= {input}/>
}

