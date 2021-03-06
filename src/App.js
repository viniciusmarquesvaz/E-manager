import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Libs

//Pages
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home/Home";
import NewProject from "./components/pages/NewProject/NewProject";

//Layout
import Container from "./components/layout/Container/Container";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Projects from "./components/pages/Projects/Projects";
import Project from "./components/pages/Project/Project";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
