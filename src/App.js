import { MovieList } from './components/MovieList';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Params from './components/Params';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<MovieList />} />
        {/* <Route path='/:id' element={<Params />} /> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;