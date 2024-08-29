import { IoHome, IoLogInOutline } from "react-icons/io5";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import { FaChalkboardTeacher } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import { useUserStore } from "../store/store";
// eslint-disable-next-line react/prop-types
export default function SlideMenu({ open, setOpen }) {
  const { user } = useUserStore((state) => state);

  return (
    <>
      <div
        className={`fixed hidden max-md:block   h-screen w-screen top-0 z-40 ${
          open ? "right-0" : "-right-[110%]"
        } transition-all duration-300 bg-[rgba(0,0,0,0.44)]`}
        onClick={() => {
          setOpen(false);
        }}
      ></div>
      <div
        className={`fixed ${
          open ? "right-0" : "-right-[110%]"
        }   h-screen  max-md:block hidden z-50  w-[300px]  transition-all duration-300`}
      >
        <div className="h-full text-white gradient flex flex-col justify-start items-end p-6 gap-3">
          <img src={logo} alt="logo" />
          <Link
            to={"/"}
            className="flex items-center gap-5 text-xl font-medium"
          >
            الرئيسية
            <IoHome className=" text-2xl" />
          </Link>
          <Link
            to={"/courses"}
            className="flex items-center gap-5 text-xl font-medium"
          >
            دوراتنا
            <FaChalkboardTeacher className=" text-2xl" />
          </Link>
          <Link
            to={"/aboutus"}
            className="flex items-center gap-5 text-xl font-medium"
          >
            من نحن
            <GrGroup className=" text-2xl" />
          </Link>
          <Link
            to={"/contactus"}
            className="flex items-center gap-5 text-xl font-medium"
          >
            تواصل معنا
            <RiContactsFill className=" text-2xl" />
          </Link>
          {Object.keys(user).length === 0 && (
            <Link
              to={"/signin"}
              className="flex items-center gap-5 text-xl font-medium"
            >
              سجل
              <IoLogInOutline className=" text-2xl" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
