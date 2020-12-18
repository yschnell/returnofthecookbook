import React, {useState,useEffect} from 'react';
import './App.css';
import './components/Posts.css';
import { client } from './client';
import Posts from './components/Posts';
import Post from './components/Post';
import Form from './components/Form';
import { Switch, Route } from 'react-router-dom';
import gif from './image/prep.gif'
import giframen from './image/ramen.gif'

 function App() {
  
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState([]);
  const [input, setInput] = useState("");


  
  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        setPosts(res.items); 
        setFiltered(res.items); 
        setCategory(res.items)} )
      .catch(() => console.log("Request failed"));
  }, []);


console.log(filtered)

return (
<div>
      <div class= 'header'>
      <div className='imgHolder'>
          <img className= "img" src={giframen} alt="ramen" height="80" width="80"></img> 
          </div>
          <div className='mainTitle'><h3>Return of the Cookbook</h3></div>

      </div>

      <div className="App">
        <div className='container1'>
        
          <Form posts={posts} filtered={filtered} setFiltered={setFiltered}  input= {input} setInput={setInput} category={category} setCategory= {setCategory} />
          <Posts posts={filtered===posts ? posts : filtered } input= {input} />
        </div>
        <div className='container2'>
      
          <main>
            <div className='wrapper'>
              <Switch>
                <Route exact path="/returnofthecookbook/" render= {() => <img className= "img" src={gif} alt="ramen" height="500" width="500" ></img>}/>
                <Route path="/returnofthecookbook/:id" render= {() => <Post posts={posts}/>}/>
              </Switch>
           </div>
         </main>
        </div>    
      </div>
      </div>
    )
  };

export default App;
