import './App.css';
import Profile from './Home/Profile';
import Skill from './Skills/Skill';
import Projects from './Projects/Project';
import Contact from './ContactMe/Contact';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <Profile />
      <Skill />
      <Projects />
      <Contact />
      <Footer />

      
    </div>
  );
}

export default App;
