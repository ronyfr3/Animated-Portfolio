import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Footer from './Footer/Footer'
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
  //https://res.cloudinary.com/fr3music/raw/upload/v1623413073/cv/Abdur_Rakib_Rony_Resume_t7nhug.docx
  return (
    <div className="App">
      <Header />
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
