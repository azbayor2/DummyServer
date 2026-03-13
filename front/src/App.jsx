import { Routes, Route, NavLink } from 'react-router-dom';
import HealthPage from './pages/HealthPage';
import DataPage from './pages/DataPage';
import PythonPage from './pages/PythonPage';
import UserPage from './pages/UserPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">DummyServer</h1>
        <div className="nav-links">
          <NavLink to="/" end>Data</NavLink>
          <NavLink to="/health">Health</NavLink>
          <NavLink to="/python">Python</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/" element={<DataPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/users" element={<UserPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
