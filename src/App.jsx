import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Tasks from "./Pages/Tasks";
import NewTaskForm from './Pages/NewTaskForm'

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <div>
      <NavBar user={user} setUser={setUser} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home user={user} token={token} />} />
        <Route
          path="/signup"
          element={<Signup setUser={setUser} setToken={setToken} />}
        />
        <Route
          path="/login"
          element={<Login setUser={setUser} setToken={setToken} />}
        />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute
              element={Tasks}
              isAuthenticated={!!user && !!token}
              user={user}
              token={token}
            />
          }
        />
        <Route path ="/new"
        element = {
          <ProtectedRoute element ={NewTaskForm}
          isAuthenticated={!!user && !!token}
          user={user}
          token={token}
        />
        }
        />
      </Routes>
    </div>
  );
}

export default App;
