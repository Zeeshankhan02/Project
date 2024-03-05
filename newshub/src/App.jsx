import Login from './Registration/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './website/Home'
import SignIn from './Registration/SignIn'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>

    </BrowserRouter>
   
  )
}

export default App
