import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, GenAI, WebDev, Backend, ProjectPage } from "./components";
import usePreventMobileZoom from "./hooks/usePreventMobileZoom";
import projects from "./project.js";

const App = () => {
  usePreventMobileZoom();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-x-hidden'>
        <div className='bg-primary bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Routes>
            <Route path='/' element={<><Hero /><About /><Experience /><Tech /><Works /><Contact /></>} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Works />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gen-ai' element={<GenAI />} />
            <Route path='/web-dev' element={<WebDev />} />
            <Route path='/backend' element={<Backend />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;