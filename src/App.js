import React, { Component, useEffect } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BloogerNavbar from './navbar/BloogerNavbar';
import './App.css'
import Home from './home/Home';
import CarouselPart from './carousel/CarouselPart';
import BlogContent from './blog-content/BlogContent';
import Footer from './footer/Footer';

class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Switch exact>
            <Route exact>
              <BloogerNavbar/>
              <Home/>
              <CarouselPart/>
              <BlogContent/>
              <Footer/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
