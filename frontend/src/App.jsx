import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />
      <p>Coucou</p>
    </div>
  );
}

export default App;
