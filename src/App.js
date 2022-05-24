import Header from "./components/header/Header";
import {Routes,Route} from 'react-router-dom'
import Service from "./pages/Service/Service";
import Webnar from "./pages/Webinar/Webnar";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
 

function App() {
  return (
    <div className="App">
    <Routes>
      <Route  path="/" element={  <Dashboard/>} />
      <Route path="services" element={<Service/>} />
      <Route path="webnars" element={<Webnar/>} />
      <Route path="profile" element={<Profile/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
       
    </Routes>
       
    </div>
  );
}

export default App;
