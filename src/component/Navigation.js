import ToggleButton from "./ToggleButton";

function Navigation() {
  return (
    <nav className="sm:flex sm:flex-row sm:justify-between sm:px-40 px-6 pt-9 pb-11 dark:bg-slate-900 bg-slate-50">
      <div>
        <h1 className="text-xl font-bold">Social Media Dashboard</h1>
        <p className="text-slate-500 font-bold text-sm">
          Total Follower: 23,004
        </p>
      </div>
      <ToggleButton />
    </nav>
  );
}

export default Navigation;
