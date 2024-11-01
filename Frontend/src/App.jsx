import {Link, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';



function App() {

  return (
    <div className="bg-slate-100">
      <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
      </nav>
    <div className="max-w-7xl mx-auto mt-6">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
    </div>
  )
}

export default App
