import './App.css'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Article from "./pages/Article.jsx";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <nav className="nav">
                    <h1>
                        My articles
                    </h1>
                    <div className="nav-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">Contact</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/article/:id" element={<Article/>}/>
                </Routes>
            </BrowserRouter>


        </div>
    )
}

export default App
