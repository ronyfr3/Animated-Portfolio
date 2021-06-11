import React from 'react'
import {Switch,Route} from 'react-router-dom'
// import Footer from './Footer/Footer'
import Home from './Home/Home'
import Header from './Header/Header'
import Projects from './Project/Projects'
import Contact from './Contact/Contact'

const App = () => {
    const changeBodyColor = () => {
        if (window.scrollY > window.innerHeight/2) {
          document.body.style.background = "#f0f0f0"
        } else {
          document.body.style.background = "#f0f0f0"
        }
      }
      window.addEventListener('scroll', changeBodyColor)
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
      {/* <Footer/> */}
      </div>
  );
}

export default App;
