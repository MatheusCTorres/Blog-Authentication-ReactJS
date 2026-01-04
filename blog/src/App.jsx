import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import CreatePost from "./components/CreatePost"
import Login from "./components/Login"
import { signOut } from "firebase/auth"
import { auth } from "./firebase"
import './App.css'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? <Link to="/login">Login</Link> :
          <>
            <Link to="/createpost">Create Post</Link>
            <button style={{ backgroundColor: "#4CAF50", cursor: "pointer" }} onClick={signUserOut}>Log Out</button>
          </>
        }
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  )
}

export default App