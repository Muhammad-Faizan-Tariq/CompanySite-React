import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

//importing Component
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Service } from "./components/Service";

//import Styling
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/Service.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/service" element={<Service/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
