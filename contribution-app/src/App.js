import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Route } from "react-router";
import Contact from "./components/Contact";
function App() {
  return <div>
    <Navbar />
    <Route path='/' exact>
      <Content />
    </Route>
    <Route path='/about'>
      <Contact />
    </Route>
  </div>
}

export default App;
