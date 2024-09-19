// React
import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import ContactPage from './pages/contact-page';
import ProjectsPage from './pages/projects-page';

// Components
import MainLayout from './components/main-layout';

// Style & CSS
import './App.css';

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
