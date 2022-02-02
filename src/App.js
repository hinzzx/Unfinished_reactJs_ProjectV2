import Navbar from './components/Navbar/navbar';
import Home from "./components/Home/Home";
import "./components/Navbar/style.css";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}>
        
        </Route>
      </Routes>
    </Layout>
    
  );
}

export default App;
