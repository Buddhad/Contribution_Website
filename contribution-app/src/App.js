import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Route } from "react-router";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return <div>
    <Navbar />
    <Route path='/' exact>
      <Content />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/contact'>
      <Contact />
    </Route>
    <Footer />
  </div>
}

export default App;
