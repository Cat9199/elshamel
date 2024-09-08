import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import Cookies from "js-cookie";

export default function Footer() {
  return (
    <div className="gradient">
      <div className="max-w-[1300px] m-auto max-md:px-5 relative">
        <img
          src={logo}
          alt=""
          className="absolute left-0 -top-5 w-48 max-md:hidden"
        />
        <div className="flex justify-center flex-col items-center py-10 gap-5  border-b border-white">
          <div className="flex justify-center items-center gap-4 ">
            <a
              target="_blank"
              href="https://youtube.com/channel/UChuX94wMiF3ha_b6R1bsd4A?si=wDZtaOaeKODQ3ps7"
            >
              <FaYoutube className="text-white text-3xl" />
            </a>
            <a target="_blank" href="https://x.com/ELSHAMEL111">
              <BsTwitterX className="text-white text-2xl" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61564023914822"
            >
              <FaFacebook className="text-white text-3xl" />
            </a>
            <a target="_blank" href="https://www.instagram.com/manasa_elshamel">
              <FaInstagram className="text-white text-3xl" />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@https://www.tiktok.com/@manasaelshamel?_t=8owjyc93jcf&_r=1"
            >
              <FaTiktok className="text-white text-3xl" />
            </a>
            <a target="_blank" href="mailto:manasa2024elshamel@gmail.com">
              <IoIosMail className="text-white text-3xl" />
            </a>
          </div>
          {!Cookies.get("token") && (
            <Link className="text-white font-medium" to={"/signin"}>
              تسجيل
            </Link>
          )}
        </div>
        <p className="py-4 text-center text-white">
          2024 جميع الحقوق محفوظة لمنصة الشامل التعليمية
        </p>
      </div>
    </div>
  );
}
