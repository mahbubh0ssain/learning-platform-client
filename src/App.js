import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

function App() {
  return <RouterProvider className="App" router={router}></RouterProvider>;
}

export default App;
