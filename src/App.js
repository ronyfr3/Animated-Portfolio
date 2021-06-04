import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import { CursorProvider } from 'react-cursor-custom'

const App = () => {
    const changeBodyColor = () => {
        if (window.scrollY > window.innerHeight/2) {
          document.body.style.background = "#3b3b3b"
        } else {
          document.body.style.background = "#f0f0f0"
        }
      }
      window.addEventListener('scroll', changeBodyColor)
  
  return (
    <CursorProvider
      noRing
      color='green'
    >
      <div className="App">
        
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Footer/>
      </div>
      </CursorProvider>
  );
}

export default App;
