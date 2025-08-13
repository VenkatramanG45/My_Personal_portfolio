import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, GenAI, WebDev, ProjectPage, MachineLearning, LearningJourney} from "./components";
import usePreventMobileZoom from "./hooks/usePreventMobileZoom";
import { projects } from "./constants";

const App = () => {
  usePreventMobileZoom();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-x-hidden'>
        <div className='bg-primary bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Routes>
            <Route path='/' element={<><Hero /><About /><Experience /><Tech /><Works /><LearningJourney /></>} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Works />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gen-ai' element={<GenAI projects={projects.filter(p => p.category === 'Gen AI')}/>} />
            <Route path='/web-dev' element={<WebDev projects={projects.filter(p => p.category === 'Web Developer')}/>} />
            <Route path='/machine-learning' element={<MachineLearning projects={projects.filter(p => p.category === 'Machine Learning')}/>} />
         
            <Route path="/project/:id" element={<ProjectPage projects={projects} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;