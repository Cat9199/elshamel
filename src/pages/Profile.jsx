import { useState } from "react";

import ProfileImg from "../components/ProfileImg";
import ProfileForm from "../components/ProfileForm";
import PasswordFrom from "../components/PasswordForm";
import CoursesSec from "../components/sections/CoursesSec";

export default function Profile() {
  const [sectionBar, setSection] = useState("1");

  return (
    <div className="max-w-[1300px] m-auto max-md:px-5">
      <ProfileImg />
      <div className="flex  w-full justify-center items-center gap-5 my-10 max-md:flex-col max-md:gap-3 ">
        <button
          className={`${
            sectionBar === "1" ? "main-btn" : "main-btn-light"
          }  w-full `}
          onClick={() => setSection("1")}
        >
          البيانات الشخصية
        </button>
        <button
          className={`${
            sectionBar === "2" ? "main-btn" : "main-btn-light"
          }  w-full `}
          onClick={() => setSection("2")}
        >
          كلمة السر
        </button>
        <button
          className={`${
            sectionBar === "3" ? "main-btn" : "main-btn-light"
          }  w-full `}
          onClick={() => setSection("3")}
        >
          كورساتي
        </button>
        <button
          className={`${
            sectionBar === "4" ? "main-btn" : "main-btn-light"
          }  w-full `}
          onClick={() => setSection("4")}
        >
          شهاداتي
        </button>
      </div>
      <div className="my-10">
        {sectionBar === "1" && <ProfileForm />}
        {sectionBar === "2" && <PasswordFrom />}
        {sectionBar === "3" && <CoursesSec />}
        {sectionBar === "4" && <div>قريبا</div>}
      </div>
    </div>
  );
}
