import React from "react";
import { BrowserRouter} from "react-router-dom";
import MyRoutes from './MyRoutes.js';
import Header from "./components/Header/Header.js";
function App() {
  return (
    <BrowserRouter>
        <Header></Header>
        <MyRoutes></MyRoutes>
    </BrowserRouter>

  );
}

export default App;
