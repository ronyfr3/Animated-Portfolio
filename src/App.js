import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Header from './Header/Header'
import Projects from './Project/Projects'
import Contact from './Contact/Contact'
import ScrollIndicator from './Header/ScrollIndicator'
import ActiveUsers from './Admin/ActiveUsers'

const App = () => {
    const changeBodyColor = () => {
        if (window.scrollY > 550) {
          document.body.style.background = "#e3fff7"
        } else {
          document.body.style.background = "#fff9fe"
        }
      }
      window.addEventListener('scroll', changeBodyColor)
  return (
    <div className="App">
      <Header />
      <ScrollIndicator />
      <ActiveUsers/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact} />
          {/* <Route path='/shop' component={() => { 
              window.location.href = 'https://fr3shop.netlify.app/'; 
              return null;
          }}/> */}
        </Switch>
        <Footer/>
      </div>
  );
}

export default App;
