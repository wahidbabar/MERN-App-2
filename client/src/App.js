import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/scenes/homePage";
import UsersPage from "./components/scenes/usersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
