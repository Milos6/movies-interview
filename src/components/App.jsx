import React from 'react';

import Header from './Header.jsx';
import Movies from './Movie/Movies.jsx';

const title = 'React Movie Cards';

const App = () => (
  <div>
    <Header title={title} />
    <div className="mt-5">
      <Movies />
    </div>
  </div>
);

export default App;
