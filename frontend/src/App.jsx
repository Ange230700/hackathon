import { Outlet } from "react-router-dom";
import Panier from "./pages/Panier";

function App() {
  return (
    <div className="App">
      <Outlet />
      <Panier />
    </div>
  );
}

export default App;
