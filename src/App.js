import Login from './components/login/login'
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Router >
        <Routes>
        <Route path="/login" element={< Login/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
