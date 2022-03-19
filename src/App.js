import styled from "styled-components";
import { Colors } from "./assets/Theme";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./assets/components/Navbar";
import Contact from './assets/components/Contact';
import About from './assets/components/About';
import Home from './assets/components/Home';

import NavigationBar from './assets/components/Navigation';

const AppEl = styled.div`
  display: flex;
  flex-direction:column;
  position:absolute;
  left:0;
  top:0;
  width:100vw;
  overflow:hidden;
  height: 100vh;
`;

const Pages = styled.div`
  flex:1;
  display:flex;
  overflow:hidden;
`;

function App() {
  return (
  <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </Routes>
  </Router>)
}

export default App;
