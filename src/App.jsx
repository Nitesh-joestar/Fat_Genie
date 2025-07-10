import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./Css/App.css";
import Page from "./Components/Page";
import Home from './Components/Home';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/quiz" element={<Page/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
