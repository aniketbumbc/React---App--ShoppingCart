import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import AddItems from './Components/AddItems';
import EditItems from './Components/EditItems';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ maxWidth: '30rem', margin: '4rem auto' }}>
      <Router>
        <h2>Shopping Cart </h2>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/add' component={AddItems} />
          <Route path='/edit/:id' component={EditItems} />
          <Route path='*' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
