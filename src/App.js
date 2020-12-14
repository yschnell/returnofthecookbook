import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';

class App extends React.Component {
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
  }

  /*useEffect(() => {
    client
      .getEntries({ content_type: cookbookRecipesG1 })
      .then((res) => setArticles(res.items))
      .catch(() => console.log("Request failed"));
  }, []);*/




  render() {
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
              <Posts posts={this.state.articles} />
          </div>
          </main>
        </div>
      </div>
    )
  };
};

  export default App;
