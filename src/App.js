import HomePage from './components/HomePage'
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
     <HomePage/>
    </div>
    </Router>
    
  );
}

export default App;
