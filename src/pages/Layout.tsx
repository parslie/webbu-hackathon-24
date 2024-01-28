import { NavLink, Outlet, useLocation } from "react-router-dom";

function NavButton({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className=" p-4 text-center bg-amber-500 text-white hover:text-amber-500  hover:bg-white font-bold"
    >
      <span>{label}</span>
    </NavLink>
  );
}

function Layout() {
  return (
    <div className=" bg-stone-900 min-h-screen">
      <header className="grid grid-cols-header items-center bg-amber-500">
        <div className="flex flex-row h-full">
          <NavButton to="/" label="Home" />
          <NavButton to="/games" label="Games" />
        </div>
        <NavLink to="/" className="text-3xl font-extrabold text-white">
          Parody Games
        </NavLink>
        <div className="flex flex-row-reverse h-full">
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
