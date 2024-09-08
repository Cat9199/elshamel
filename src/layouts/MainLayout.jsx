import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="relative">
      {/* <div className="phone-menu hidden max-md:block">/ asdasf</div>
      <div className="rest"> */}
      <Navbar />

      <Outlet />

      <Footer />
      {/* </div> */}
    </div>
  );
}
