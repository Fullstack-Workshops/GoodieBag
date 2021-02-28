import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Candies from './Candies';
import SingleCandy from './SingleCandy';

const Root = () => {
  return (
    <Router>
    <div>
      <nav>
        Goodie Bag
        <Link to="/">Homepage</Link>
        <Link to="/candies">All Candies</Link>
      </nav>
      <main>
        <div id="main-container">
          <h1>Welcome to the Goodie Bag!</h1>
          <Switch>
            <Route exact path="/candies" component={Candies} />
            <Route path="/candies/:id" component={SingleCandy} />
          </Switch>
        </div>
      </main>
    </div>
    </Router>
  )
}

export default Root
