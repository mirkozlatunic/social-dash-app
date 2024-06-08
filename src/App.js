import Main from "./component/Main";
import Navigation from "./component/Navigation";

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white h-full">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
