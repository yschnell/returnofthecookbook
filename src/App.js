import React, {useState,useEffect} from 'react';
import './App.css';
import './components/Posts.css';
import { client } from './client';
import Posts from './components/Posts';
import Post from './components/Post';
import Form from './components/Form';
import { Switch, Route } from 'react-router-dom';
import gifprep from './image/prep.gif'

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
      <div className="App">
        <div className='container1'>
          {/*<img className= "img" src={gif} alt="ramen" height="100" width="100"></img>*/}
          <Form posts={posts} filtered={filtered} setFiltered={setFiltered}  input= {input} setInput={setInput} category={category} setCategory= {setCategory} />
          <Posts posts={filtered===posts ? posts : filtered } input= {input} />
        </div>
        <div className='container2'>
          <main>
            <div className='wrapper'>
              <Switch>
                <Route exact path="/returnofthecookbook/" render= {() => <img className= "img" src={gifprep} alt="ramen" height="500" width="500" ></img>}/>
                <Route path="/returnofthecookbook/:id" render= {() => <Post posts={posts}/>}/>
              </Switch>
           </div>
         </main>
        </div>    
      </div>
    )
  };

export default App;
