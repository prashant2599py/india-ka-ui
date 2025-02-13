
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Examples from './components/examples/Examples'
import Docs from './components/docs/Docs'
import Components from './components/allComponents/ComponentSidebar'
// import Avatar from './components/allComponents/Avatar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/docs' element={<Docs />}/>
          <Route path='/examples' element={<Examples />}/>
          <Route path='/components' element={<Components />}/>
          {/* <Route path='/components/Avatar' element={<Avatar />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
