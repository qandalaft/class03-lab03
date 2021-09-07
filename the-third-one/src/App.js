import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />

      </>
    )
  }
}

export default App
