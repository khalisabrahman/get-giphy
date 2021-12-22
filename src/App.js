import logo from './logo.svg';
import './styles/styles.css';
import Giphy from './components/Giphy';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Giphy /> */}
    </div>
  );
}

export default App;
