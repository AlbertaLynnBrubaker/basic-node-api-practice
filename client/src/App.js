import { Routes, Route } from 'react-router-dom'

import './App.css'

import Signup from './components/Signup'
import Home from './components/Home'
import Nav from './components/Nav';
import UsersPage from './components/UsersPage';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/users' element={ <UsersPage /> } />
        </Routes>
      </header>
    </div>
  );
}

{/* <Form /> */}

export default App;
