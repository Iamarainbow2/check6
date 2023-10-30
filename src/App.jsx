
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from 'react-router-dom'
import Adress from './components/Adress'
import Personal from './components/Personal'
import Dashboard from './Dashboard'


function App() {
    
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path={'/adress/' + id} element={<Adress/>}/>
          <Route path='/personal' element={<Personal/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
