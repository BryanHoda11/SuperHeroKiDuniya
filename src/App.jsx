import React, { useState } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import List from './pages/List';
import Popular from './pages/Popular';
import { MdOutlineArrowRight } from "react-icons/md";
import { MyListProvider } from './context/context';

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <MyListProvider>
        <Router>
          <Navbar />
          <div className="main-container w-full flex">
            <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
            <div className='movies-container overflow-y-scroll h-[90vh] w-full lg:w-[87%] bg-slate-900 text-white'>
              <button onClick={() => setSidebar(!sidebar)} className='flex items-center justify-start lg:hidden cursor-pointer bg-transparent mt-8'><MdOutlineArrowRight style={{ fontSize: '30px' }} /></button>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/popular" element={<Popular />} />
              </Routes>
            </div>
          </div>
        </Router>
      </MyListProvider>
    </>
  )
}

export default App
