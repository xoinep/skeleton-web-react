import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { StoreProvider } from "easy-peasy";
import store from "./store/index";
function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <HomeScreen></HomeScreen>
      </div>
    </StoreProvider>
  );
}

export default App;
