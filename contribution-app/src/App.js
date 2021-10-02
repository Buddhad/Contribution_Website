import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Route } from "react-router";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Profilecard from "./components/Profilecard";
function App() {
  return <div>
    <Navbar />
    <Route path='/' exact>
      <Content />
    </Route>
    <Route path='/about'>
      <Contact />
    </Route>
    <Profilecard/>
    <Footer/>
  </div>
}

export default App;
