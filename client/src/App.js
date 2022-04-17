import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
