import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// 1) fetch data & set the state - DONE
// App 
    // fetch json data
    // app holds the state
    
// 2) render the data - DONE
// App
    // pass data via state to toyContainer
    // map through data & send props to ToyCard

// 3) Create a new toy - DONE
// App
    // make a callback function to add new toy
    // post request
    // update FE & BE
    // spread op & pass in the new obj

// ToyForm
    // handleSubmit
    // scrape the data the values
    // call the callback function & send data

// 4) Delete toy - Donate to Goodwill - DONE
// App
    // delete callback function - send cbf via props
    // fetch w/ id & method delete
    // update BE & FE

// ToyCard
    // handletheClick & send the id to callback function in App


// 5) Increase Likes - DONE
// App
    // cbf patch for likes - needs id
    // update BE & FE

// ToyCard 
    // handldle the click