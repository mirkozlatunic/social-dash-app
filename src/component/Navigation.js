import ToggleButton from "./ToggleButton";

function Navigation() {
  return (
    <nav className="flex justify-between px-40 pt-9 pb-40 bg-gray-50">
      <div>
        <h1 className="text-lg font-bold">Social Media Dashboard</h1>
        <p className="text-neutral-600">Total Follower: 23,004</p>
      </div>
      <ToggleButton />
    </nav>
  );
}

export default Navigation;
