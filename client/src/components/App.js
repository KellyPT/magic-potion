import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OrderCreate from './OrderForm';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route path="/" exact component={OrderCreate} />
      </BrowserRouter>
    </div>
  );
};

export default App;
