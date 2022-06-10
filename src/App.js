import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Write from "./pages/Write";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/Sign" exact element={<Sign />}></Route>
        <Route path="/Write" exact element={<Write />}></Route>
      </Routes>
    </div>
  );
}

export default App;
