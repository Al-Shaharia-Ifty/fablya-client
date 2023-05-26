import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/router";
import "swiper/css";
import "swiper/css/pagination";
import "react-image-gallery/styles/css/image-gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
