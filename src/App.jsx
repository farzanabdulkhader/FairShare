import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import FriendList from "./components/FriendList";
import NewFriendForm from "./components/NewFriendForm";
import LogLayout from "./pages/LogLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/friends" replace />} />
            <Route path="/friends" element={<FriendList />} />
            <Route path="/add-friend" element={<NewFriendForm />}></Route>
          </Route>
          <Route element={<LogLayout />}>
            <Route index element={<Navigate to="/login" replace />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
