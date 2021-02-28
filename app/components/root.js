import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Candies from './Candies';

const Root = () => {
  return (
    <Router>
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <div id="main-container">
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Switch>
            <Router path="/candies" component={Candies} />
          </Switch>
        </div>
      </main>
    </div>
    </Router>
  )
}

export default Root
