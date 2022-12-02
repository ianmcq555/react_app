import React, { Component } from 'react'
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {},
      post: [],
      name: 'Ian',
      age: 25,
      message: {}
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

  logMeIn = (user) => {
    this.setState({
      user: user
    })
  }

  logMeOut = () => {
    this.setState({
      user: {}
    })
  }

  addMessage = (msg, category) => {
    this.setState({message: {message: msg, category: category}})
  }

  render() {
    console.log('Rendering...')
    return (
      <Router>
      <div>
        <Nav user={this.state.user} logMeOut={this.logMeOut} cart ={this.state.cart}/>
        <p className={`bg-${this.state.message.category}`}>{this.state.message.message}</p>
        <Routes>
          <Route path='/' element={<Home age={this.state.age} x={this.happyBirthday}/>}/>
          <Route path='/login' element={<Login logMeIn={this.logMeIn} addMessage={this.addMessage}/>}/>
          <Route path='/signup' element={<Signup addMessage={this.addMessage}/>}/>
        </Routes>
      </div>
      </Router>
    )
  }
}