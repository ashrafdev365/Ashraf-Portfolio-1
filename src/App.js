import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import Service from './Pages/Service/Service'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/service' component={Service} />
      </Switch>
    </Router>
    </>
  )
}

export default App
