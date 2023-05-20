import logo from './logo.svg';
import './App.css';

//components
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import KnowYourBatch from './components/KnowYourBatch';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     

      <Routes>
      <Route path = {'/'}  element = {<NavBar />}></Route>
      <Route path = {'/aboutus'}  element = {<KnowYourBatch />}></Route>
      <Route path = {'/students'}  element = {<AllUsers />}></Route>
      <Route path = {'/Student'}  element = {<AddUser />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
