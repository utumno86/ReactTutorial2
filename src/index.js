import React from 'react'
import ReactDOM from 'react-dom'

const API_KEY = 'AIzaSyCEfHxllsN9nABgjjTr6iawPQ7IJt2ljWM'

// Create a new component. This component should produce some HTML
const App = () => {
  return <div>Hi!</div>
}
console.log(API_KEY)
console.log("Hello there!")
// Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))