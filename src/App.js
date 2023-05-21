import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/router";
import "swiper/css";
import "swiper/css/pagination";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
