import './assets/css/reset.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './page/Home'
import MusicChart from './components/MusicChart'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> } >
          
        </Route>
        <Route path='/chart' element={ <MusicChart/> } >
            
            </Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
