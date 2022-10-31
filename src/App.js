import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import SideBar from "./components/sidebar/sidebar.component";
import HomePage from "./pages/homepage/homepage.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Projects from "./pages/projects/projects.component";
import Contact from "./pages/contact/contact.component";
import PageNotFound from "./pages/404/page-not-found.component";

function App() {
  return (
    <div className="App">
      <Navigation />
      <SideBar />
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
