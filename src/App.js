import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navBar';
import Home from './pages/home';
import News from './pages/news';
import Service from './pages/service';
import Company from './pages/conpany';
import Contact from './pages/contact';
import Footer from './pages/footer';
import NavBar from './pages/navBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
  <div className="app">
    <NavBar/>
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/company" component={Company}/>
    <Route path="/news" component={News}/>
    <Route path="/service" component={Service}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
    <Footer/>
  </div>
  </Router>
  );
}


export default App;
