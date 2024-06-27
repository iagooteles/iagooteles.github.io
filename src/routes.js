import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/index.js';
import CreateAccount from './pages/CreateAccount';
import Error from './pages/Error';

function RoutesApp() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;