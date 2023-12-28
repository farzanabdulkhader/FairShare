import { Outlet } from "react-router-dom";
import Logo from "../ui/Logo";

function AppLayout() {
  return (
    <div>
      <Logo />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
