import "./App.css";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <SearchBar />
    </Provider>
  );
}

export default App;
