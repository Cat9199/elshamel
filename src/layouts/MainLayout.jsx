import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import PhoneMenu from "../components/PhoneMenu";

export default function MainLayout() {
  return (
    <div className="relative">
      <PhoneMenu />
      <div className="rest">
        <Navbar />

        <Outlet />

        <Footer />
      </div>

      <a
        href="https://wa.me/+201069725012"
        target="_blank"
        className="whats-icon"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </div>
  );
}
