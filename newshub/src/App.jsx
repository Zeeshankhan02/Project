import Login from './Registration/Login'
import SignUp from './Registration/SignUp'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './website/Home'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>

    </BrowserRouter>
   
  )
}

export default App
