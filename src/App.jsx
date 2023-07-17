import './assets/css/reset.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './page/Home'
import MusicChart from './page/MusicChart'
import ItemInfoPage from './components/ItemInfoPage'
import MusicList from './components/MusicList'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >

          </Route>
          <Route path='/chart'  >
            <Route index element={<MusicChart />} />
            <Route path=":chartid/:listname" element={<ItemInfoPage />} />
            <Route path=':listname' element = {<MusicList/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
