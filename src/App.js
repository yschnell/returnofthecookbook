import React, {useState,useEffect} from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';
import Form from './components/Form';

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
        <div className='container'>
          <header>
              <div className='wrapper'>
                <span className='header-title'>THE RETURN OF THE COOKBOOK</span>
              </div>
          </header>
          <main>
          <div className='wrapper'>
              <Form posts={articles} filtered={filtered} setFiltered={setFiltered}  input= {input} setInput={setInput}/>
              <Posts posts={filtered===articles ? articles : filtered } input= {input} include={include} setInclude={setInclude}/>
          </div>
          </main>
        </div>
      </div>
    )
  };

export default App;
