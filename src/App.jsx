import HomePage from "./pages/HomePage";
import LogLayout from "./pages/LogLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<LogLayout />}>
            <Route index element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/friends" replace />} />
            <Route path="/friends" element={<FriendList />} />
            <Route path="/add-friend" element={<NewFriendForm />}></Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
