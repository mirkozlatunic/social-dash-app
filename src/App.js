import Main from "./component/Main";
import Navigation from "./component/Navigation";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white h-screen">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
