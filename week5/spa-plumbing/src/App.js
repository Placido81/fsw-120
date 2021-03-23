import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import './App.css';
import {Switch, Route} from 'react-router-dom'

function App () {
    return (
        <div>
        <NavBar />
                <Switch>
                <Route exact path='/' component={Home}/>
                   <Route path='/Services' component={Services}/>
                   <Route path='/About' component={About}/>
                   
               </Switch>
              
             <Footer />
             </div>
            
        
    )
}


export default App;