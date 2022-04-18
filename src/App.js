import React from 'react'
import './App.css'
import Header from './component/header/Header'
import Details from './component/main/Details'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'
import China from './component/main/Country/China';
import HongKong from './component/main/Country/HongKong';
import Indonesia from './component/main/Country/Indonesia'
import Japan from './component/main/Country/Japan'
import JPN from './component/main/Country/JPN';
import Malaysia from './component/main/Country/Malaysia'
import Mynamar from './component/main/Country/Mynamar'
import SG from './component/main/Country/SG';
import Singapore from './component/main/Country/Singapore';
import SouthKorea from './component/main/Country/SouthKorea';
import Taiwan from './component/main/Country/Taiwan';
import Thailand from './component/main/Country/Thailand';
import USA from './component/main/Country/USA';
import LinkPage from './component/main/LinkPage'

const App = () => {
  const data = useSelector(state => state.CountryItem);
  console.log(data);
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Details />}></Route>
          <Route path='/Myanmar' element={<Mynamar/>}></Route>
          <Route path='/Singapore' element={<Singapore/>}></Route>
          <Route path='/SG' element={<SG/>}></Route>
          <Route path='/Taiwan' element={<Taiwan/>}></Route>
          <Route path='/China' element={<China/>}></Route>
          <Route path='/Malaysia' element={<Malaysia/>}></Route>
          <Route path='/JPN' element={<JPN/>}></Route>
          <Route path='/Thailand' element={<Thailand/>}></Route>
          <Route path='/Japan' element={<Japan/>}></Route>
          <Route path='/South Korea' element={<SouthKorea/>}></Route>
          <Route path='/USA' element={<USA/>}></Route>
          <Route path='/Indonesia' element={<Indonesia/>}></Route>
          <Route path='/HongKong' element={<HongKong/>}></Route>
        </Routes>
        <div className='country'>
          {data.map(e => (
            <LinkPage value={e} />
          ))}
        </div>
      </main>
    </Router>
  )
}

export default App

