// React
import { Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

// Components
import MainLayout from "./components/MainLayout";

// Style & CSS
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
