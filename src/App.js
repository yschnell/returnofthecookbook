import React, {useState,useEffect} from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';

 function App() {
  
  const [articles, setArticles] = useState([]);
  
 
  useEffect(() => {
    client
      .getEntries()
      .then((res) => setArticles(res.items))
      .catch(() => console.log("Request failed"));
  }, []);



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
              <Posts posts={articles} />
          </div>
          </main>
        </div>
      </div>
    )
  };

export default App;


  /*class App extends React.Component {
    state = {
        articles: []
    }
  
    componentDidMount() {
        client.getEntries()
        .then((response) => {
            console.log(response)
            this.setState({
                articles: response.items
            })
        })
        .catch(console.error)
    }*/