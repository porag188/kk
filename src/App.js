import logo from './logo.svg';
import './App.css';
import Navbar from './pages/navBar';
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
    <Route path="/" exact component={News} />
    <Route path="/company" component={Company}/>
    <Route path="/service" component={Service}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
    <Footer/>
  </div>
  </Router>
  );
}
const Home=()=>(
  <div>
    <h1>Home page</h1>
  </div>
)

export default App;
