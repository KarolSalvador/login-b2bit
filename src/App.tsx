import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
