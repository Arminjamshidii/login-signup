
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
        <Routes>
        
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Navigate to="/login"/>} />
        
        
          
        </Routes>
       </div> 
        </BrowserRouter>
  );
}

export default App;
