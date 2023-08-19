import './index.css';
import Header from './components/Header'
import Nav  from './components/Nav'
import Experience from './components/Experience'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Resume/>
        <Portfolio/>  
        <Contact/>
        <Footer/>  
    </div>
  );
}

export default App;
