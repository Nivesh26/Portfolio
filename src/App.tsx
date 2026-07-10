import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CustomCursor from './Components/CustomCursor'

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App