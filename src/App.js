import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/style.css';
import { Header } from './components/header/header';
import { NoMatch } from './components/noMacthPage/noMatch';
import Home from './components/home/home';
const LazyAbout = React.lazy(() => import('./components/about/about'));

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='*' element={<NoMatch />}></Route>
        <Route path='/' exact element={<Home />}  ></Route>
        <Route path='about' exact element={<React.Suspense fallback='Loading...'> <LazyAbout /> </React.Suspense>}></Route>
      </Routes>
    </>
  );
}

export default App;