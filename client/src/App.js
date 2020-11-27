import './App.css';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Landing />
     <Footer/>
     <h1>Tommorow work</h1>
     <h2>Finish the project</h2>
    </div>
  );
}

export default App;
