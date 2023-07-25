
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import News from './pages/News'
import { Form } from 'react-router-dom'


function App() {
  return (
    <div className='app'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
      </Routes>





    </div>
  )
}

export default App