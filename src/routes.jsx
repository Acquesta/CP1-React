import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hotbar from "./components/hotbar"
import Home from './pages/Home';
import Sobre from './pages/Sobre';


function App() {

  return (
    <BrowserRouter>
      <Hotbar />
      <Routes>
        <Route 
          index
          element = {<Home />}
        />
        <Route
          path = 'Sobre'
          element = {<Sobre />}
        />
      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
