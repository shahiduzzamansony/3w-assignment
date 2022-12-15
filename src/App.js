import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/Routes/Route";

function App() {
  return (
    <div className="bg-accent">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
