import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/home/login";
import Signup from "./pages/home/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
