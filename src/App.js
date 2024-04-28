import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.js';
import { Projects } from './pages/Projects';
import { CaseStudy } from './pages/CaseStudy';
import { NotFound } from './pages/NotFound';
import { Duck } from './pages/Duck.js';


const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='casestudy' element={<CaseStudy/>}/>
        <Route path='duck' element={<Duck/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     </BrowserRouter>
  );
 };

 export default App

 
 