import React, {useState,useEffect} from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';
import Post from './components/Post';
import Form from './components/Form';
import { Switch, Route } from 'react-router-dom';
/*import gif from './assets/ramen_boat_1.gif'*/

 function App() {
  
  const [articles, setArticles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [input, setInput] = useState("");
  const [include,setInclude] = useState(true);
  

  
  useEffect(() => {
    client
      .getEntries()
      .then((res) => {setArticles(res.items); setFiltered(res.items)} )
      .catch(() => console.log("Request failed"));
  }, []);

 useEffect(()=> {
   if(input==="") {
    setInclude(true)
   }
 }, [input] )

 console.log(`input: ${input}`);
 console.log(`include: ${include}`);

console.log(filtered)


return (
      <div className="App">

   
            <div className='container1'>
              <Form posts={articles} filtered={filtered} setFiltered={setFiltered}  input= {input} setInput={setInput}/>
              <Posts posts={filtered===articles ? articles : filtered } input= {input} include={include} setInclude={setInclude}/>
            </div>
            <div className='container2'>
                  <main>
                    <div className='wrapper'>
                      {/* <Posts posts={filtered===articles ? articles : filtered } input= {input} include={include} setInclude={setInclude}/>*/}
                      <Switch>
                        {/* <Route exact path="/"><img src={gif}/></Route> */}
                        <Route path="/:id" render= {() => <Post posts={articles}/>}/>
                      </Switch>
                    </div>
                  </main>
            </div>
            
      </div>
    )
  };

export default App;
