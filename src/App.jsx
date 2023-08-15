import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './Dashboard/Dashboard';
import Image from './images/image';
import { Clients } from './clients/Clients';
import Home from './Homes/Home';
// import Guryaha from './Guryaha/Guryaha';
import Service from './Services/Service';
import Contact from './contacts/Contact';
import About from './About/About';
import Galery from './Gellery/Galery';
import House from './Houses/House';
import Notfound from './Notfound';
import Login from './Login/Login';
import { useUsercontext } from './contextApi/Context';
// import Dashboard from './Dashboard/Dashboard';
// import Image from './images/image';
// import { Clients } from './clients/Clients';
// import Clients from './clients/Clients';

function App() {
  const { roleallowed } = useUsercontext();
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Notfound />} />

        <Route path='dashboard' element={<Dashboard />}>
          {roleallowed == 'Admin' ? (
            <>
              <Route path='image/:id' element={<Image />} />
              <Route path='client' element={<Clients />} />
              <Route path='home' element={<Home />} />
              <Route path='guryaha' element={<House />} />
              <Route path='service' element={<Service />} />
              <Route path='contact' element={<Contact />} />
              <Route path='about' element={<About />} />
              <Route path='galery' element={<Galery />} />
            </>
          ) : (
            <>
              <Route path='home' element={<Home />} />
              <Route path='guryaha' element={<House />} />
              <Route path='contact' element={<Contact />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
