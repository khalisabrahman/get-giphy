import logo from './logo.svg';
import './styles/styles.css';
import Giphy from './components/Giphy';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Giphy />
    </div>
  );
}

export default App;
