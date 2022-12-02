import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
          user: null,
          post: [],
          name: 'Ian',
          age: 25
        }
      }
      happyBirthday = () => {
        console.log('Adding to age...')
        this.setState({age: this.state.age + 1})
      }
  render() {
    return (
      <div>
        {this.props.age}
        <h1>Hello</h1>
        <h3>The name is {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>
        <button onClick={() => this.props.x()} >Add to age +</button>
      </div>
    )
  }
}