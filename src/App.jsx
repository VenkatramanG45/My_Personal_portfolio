import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import usePreventMobileZoom from "./hooks/usePreventMobileZoom";


const App = () => {
  usePreventMobileZoom();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-x-hidden'>
        <div className='bg-primary bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
