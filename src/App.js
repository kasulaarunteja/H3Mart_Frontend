import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin';
import Navbar from './components/Navbar';
import MarketDetail from './components/MarketDetail';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='Parent'>
      <MarketDetail/>
      <Coin/>
      </div>
    
    </div>
  );
}

export default App;
