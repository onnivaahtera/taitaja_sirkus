import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import About from './pages/about'
import Home from './pages/home'


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
