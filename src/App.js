import './App.css';
import { BrowserRouter } from "react-router-dom";
import Pages from './Components/Pages';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h2 className='logo'><a href='/'> Noodle Boodle</a></h2>
        <NavBar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
