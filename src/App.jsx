import './assets/css/reset.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './page/Home'
import MusicChart from './page/MusicChart'
import ItemInfoPage from './components/ItemInfoPage'
import MusicList from './components/MusicList'
import Searchpage from './components/Searchpage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<Home />} />
            <Route path=':searchtext' element= { <Searchpage/> } />
          </Route>
          <Route path='/chart'  >
            <Route index element={<MusicChart />} />
            <Route path=":chartid/:listname" element={<ItemInfoPage />} />
            <Route path=':listname/:text/:type' element = {<MusicList/>} />
            {/* <Route path=':listname' element = {<MusicList/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
