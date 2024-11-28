import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { Navigate } from "react-router";
import { checkToken } from "./api/storage";

function App() {
  if (!checkToken()) {
    return <Navigate to="/register" />;
  }
  return (
    <div className="App">
 <Login/>
    </div>
  );
}

export default App;
