function ToggleButton() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex items-center">
      <p className="pr-3.5">Dark Mode</p>
      <button
        onClick={toggleTheme}
        className="py-5 px-3 rounded bg-black text-white hover:bg-slate-800"
      >
        button
      </button>
    </div>
  );
}

export default ToggleButton;
