import HomePage from "./pages/HomePage";
import LogLayout from "./pages/LogLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NewFriendForm from "./components/NewFriendForm";
import SplitForm from "./components/SplitForm";
import AppLayout from "./pages/AppLayout";

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
          <Route element={<AppLayout />}>
            <Route
              path="/friends"
              element={<Navigate to="/friends" replace />}
            />
            <Route path="/add-friend" element={<NewFriendForm />} />
            <Route path="/split-form/:id" element={<SplitForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
