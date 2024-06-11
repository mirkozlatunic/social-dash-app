import ToggleButton from "./ToggleButton";

function Navigation() {
  return (
    <nav className="flex justify-between px-40 pt-9 pb-40 dark:bg-slate-900 bg-slate-50">
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
