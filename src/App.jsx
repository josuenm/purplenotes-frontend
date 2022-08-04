import RouteController from "./RouteController";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteController />
      </BrowserRouter>
    </div>
  );
}
