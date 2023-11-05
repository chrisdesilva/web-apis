import logo from "./logo.svg";
import "./App.css";
import { useGeolocation } from "./hooks/useGeolocation";
import { useIsOnline } from "./hooks/useIsOnline";

function App() {
  // const { locationInfo, locationError } = useGeolocation();
  const isOnline = useIsOnline();

  console.log({ isOnline });

  if (!isOnline) {
    return <p>You are not connected!!</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
