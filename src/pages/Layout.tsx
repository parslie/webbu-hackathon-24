import { NavLink, Outlet, useLocation } from "react-router-dom";

function NavButton({ to, label }: { to: string, label: string }) {
  return (
    <NavLink to={to} className="flex items-center px-4 rounded-md bg-[#797979] text-white">
      <span>{label}</span>
    </NavLink>
  );
}

function Layout() {
  const location = useLocation();
  const whiteBackground = location.pathname == "/";

  return (
    <div className={`min-h-screen ${whiteBackground ? "bg-white" : "bg-[#707070]"}`}>
      <header className="grid grid-cols-header p-1 bg-[#d9d9d9]">
        <div className="flex flex-row gap-1">
          <NavButton to="/" label="Home" />
          <NavButton to="/games" label="Games" />
        </div>

        <h1 className="text-2xl">Parody Games</h1>

        <div className="flex flex-row-reverse gap-1">
          <NavButton to="/cart" label="Cart" />
          <NavButton to="/login" label="Login" />
          {/* TODO: only show when logged in */}
          {/* TODO: set id in url to logged in users */}
          <NavButton to="/account/1" label="Account" />
        </div>
      </header>
      
      <Outlet />
    </div>
  );
}

export default Layout;
