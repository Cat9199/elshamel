import { CgProfile } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IoHome } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useUserStore } from "../store/store";

export default function PhoneMenu() {
  const { user } = useUserStore((state) => state);

  return (
    <div className="phone-menu flex justify-between items-center text-white bg-gray-800">
      <Link
        to="/"
        className="flex flex-col h-full w-1/4 items-center justify-center font-normal text-sm"
      >
        <IoHome className="text-xl mb-1" />
        الرئيسية
      </Link>
      <Link
        to="/courses"
        className="flex flex-col h-full w-1/4 items-center justify-center font-normal text-sm"
      >
        <FaChalkboardTeacher className="text-xl mb-1" />
        دوراتنا
      </Link>
      <Link
        to="/aboutus"
        className="flex flex-col h-full w-1/4 items-center justify-center font-normal text-sm"
      >
        <GrGroup className="text-xl mb-1" />
        من نحن
      </Link>
      <Link
        to={Object.keys(user).length === 0 ? "/signin" : `/profile/${user.id}`}
        className="flex flex-col h-full w-1/4 items-center justify-center font-normal text-sm"
      >
        {/* If user has a profile picture, show it. Otherwise, show the default profile icon */}
        {user.profile_pic ? (
          <img
            src={user.profile_pic}
            alt="Profile"
            className="w-8 h-8 rounded-full mb-1"
          />
        ) : (
          <>
            <CgProfile className="text-xl mb-1" />
            <p>حسابي</p>
          </>
        )}
      </Link>
    </div>
  );
}
