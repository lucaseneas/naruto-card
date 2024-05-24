import React from "react";
import { BrowserRouter} from "react-router-dom";
import MyRoutes from './MyRoutes.js';
import Header from "./components/Header/Header.js";
import ScreenBlocker from "./components/ScreenBlocker/ScreenBlocker.js";
function App() {
  return (
    <BrowserRouter> 
        <ScreenBlocker></ScreenBlocker>
        <MyRoutes></MyRoutes>
    </BrowserRouter>

  );
}

export default App;
