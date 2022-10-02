import Login from './components/login/login'
import Success from './page/Success'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router >
        <Routes>
        <Route path="/login" element={< Login/>} />
        <Route path="/Success" element={< Success/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
