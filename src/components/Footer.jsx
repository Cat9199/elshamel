import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <div className="gradient">
      <div className="max-w-[1300px] m-auto max-md:px-5 relative">
        <img src={logo} alt="" className="absolute left-0 -top-5 w-48" />
        <div className="flex justify-center flex-col items-center py-10 gap-5  border-b border-white">
          <div className="flex justify-center items-center gap-4 ">
            <a href="#" target="_blank">
              <FaFacebook className="text-white text-3xl" />
            </a>
            <a href="#" target="_blank">
              <IoIosMail className="text-white text-3xl" />
            </a>
          </div>

          <Link className="text-white font-medium" to={"/signin"}>
            تسجيل
          </Link>
        </div>
        <p className="py-4 text-center text-white">
          2024 جميع الحقوق محفوظة لمنصة الشامل التعليمية
        </p>
      </div>
    </div>
  );
}
