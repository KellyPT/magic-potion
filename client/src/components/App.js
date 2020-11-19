import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OrderCreate from './OrderCreate';

const App = () => {
  return (
    <div className="ui container">
      <h1>Order your Magic Potion</h1>
      <BrowserRouter>
        <Route path="/" exact component={OrderCreate} />
      </BrowserRouter>
    </div>
  );
};

export default App;
