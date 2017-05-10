import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDz5xDx8Z8cYFIROA1JWSBYEJEgpAQ8mrY';

// create a new component. this component should
// produce some HTML
//React.createElement

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// take this component's generate HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
