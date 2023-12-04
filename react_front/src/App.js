import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import World from './components/World';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div><Link to='/worldchat'><h1>world chat</h1></Link></div>} />
        <Route path='/worldchat' element={<World />}/>
      </Routes>
    </div>
  );
}

export default App;
