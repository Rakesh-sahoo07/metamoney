import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMint from "./MainMint";
import GamePage from "./gamepage";
import NavBar from "./NavBar";
function App() {
  const [accounts, setAccounts] = useState([]);
    return ( 
      <div className="overlay">
        <div className = "App" >
          <NavBar accounts={accounts} setAccounts={setAccounts} />
          <MainMint accounts={accounts} setAccounts={setAccounts} />
        </div>
        <div className="background"></div>
        <div>
        
        </div>
      </div>


        
        
      
    );
}

export default App;