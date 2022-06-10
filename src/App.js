import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/Signup" exact element={<Signup />}></Route>
        <Route path="/Write" exact element={<Write />}></Route>
      </Routes>
    </div>
  );
}

export default App;
