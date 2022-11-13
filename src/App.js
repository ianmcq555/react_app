import React, { Component } from 'react'
import Nav from './Nav';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      post: [],
      name: 'Ian',
      age: 25
    }
    console.log('Construction complete...')
  }

  componentDidMount = () => {
    console.log('First rendering complete!')
  }

  happyBirthday = () => {
    console.log('Adding to age...')
    this.setState({age: this.state.age + 1})
  }

  render() {
    console.log('Rendering...')
    return (
      <div>
        <Nav/>
        <h1>Hello</h1>
        <h3>The name is {this.state.name}</h3>
        <button onClick={this.happyBirthday} >Add to age +</button>
        <h3>Age: {this.state.age}</h3>
      </div>
    )
  }
}