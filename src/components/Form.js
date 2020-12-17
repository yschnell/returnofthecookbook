import React from 'react';

export default function Form({input,setInput,posts,setFiltered,filtered,category, setCategory}) {

    function onSelect(e) {
        if(e.target.value!=="") {
        setFiltered(posts.filter(article=> article.fields.recipeCategory.toLowerCase().includes(e.target.value.toLowerCase()) ));
        setCategory(posts.filter(article=> article.fields.recipeCategory.toLowerCase().includes(e.target.value.toLowerCase()) )  ) 
        setInput("")
    } else {
        setFiltered(posts)
        setCategory(posts)
        setInput("")
    }
}
    function onChangeHandler(e) {
        setInput(e.target.value)
        if(e.target.value==="" || e.target.value.length<=2) {
            setFiltered(category ) 
        } else {
        setFiltered(filtered.filter(article=> article.fields.recipeTitle.toLowerCase().includes(e.target.value.toLowerCase()) )  ) //ask fey
    }
        console.log(posts)
    } 

    return (
    <div>
        <select onChange={ onSelect}  name="meal" id="meal">
            <option value="" >Select Meal Category</option>
            <option  value="Breakfast">Breakfast</option>
            <option  value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
        </select>
        <input placeholder="Search your delicious recipe" onChange={onChangeHandler} value= {input}/>
    </div>
    )
}

