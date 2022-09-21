import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin';


function App() {
  return (
    <div className="App">
    <div className="img-logo">
        <img className="logo" src="img/coincapLogo.svg" ></img>
      </div>
     <Coin/>
    </div>
  );
}

export default App;
