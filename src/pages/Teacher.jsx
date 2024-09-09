import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axiosInstance";
import { useEffect, useState } from "react";
// import logo from "../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { PiStudentLight } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { toast, Toaster } from "sonner";
export default function Teacher() {
  const { teacherId } = useParams();
  const [teachers, setTeachers] = useState({});
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getTeachers = async () => {
      try {
        const res = await axiosInstance.get(
          `https://elshamelapi.js-py.me/teacher/${teacherId}`
        );
        setTeachers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTeachers();
  }, [teacherId]);
  const copyUrlToClipboard = () => {
    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl).then(() => {
      toast.success("تم نسخ الرابط بنجاح");
    });
  };

  return (
    <div className="  max-md:p-5">
      <Toaster position="bottom-right" richColors />
      <div className="  p-10    space-y-6">
        <div className="space-y-3">
          <div className="w-32 h-32 rounded-full overflow-hidden m-auto">
            <img src={teachers.teacher?.profile_pic} alt="" />
          </div>
          <h1 className="gradient-text text-center font-medium text-3xl  ">
            {teachers && teachers.teacher?.name}
          </h1>
          <p className="text-center text-gray-500">
            مدرس في منصة الشامل التعليمية يهدف إلى تبسيط المفاهيم العلمية
            وتقديمها بأسلوب يسهل على الطلاب فهمها
          </p>
          <p className="text-center text-gray-500">
            An instructor at Elshamel Academy Platform aims to simplify
            scientific concepts and present them in a way that is easy for
            students to understand.
          </p>
          <div className="m-auto w-fit flex gap-4 justify-center items-center">
            <button
              disabled
              className="py-2 px-4 border border-blue-500 flex rounded-full gap-2 items-center"
            >
              دردشة <IoChatbubblesOutline />
            </button>
            <button
              onClick={copyUrlToClipboard}
              className="py-2 px-4 border border-blue-500 flex rounded-full gap-2 items-center"
            >
              مشاركة <FaRegShareFromSquare />
            </button>
          </div>
        </div>
      </div>
      <div className="  p-5 px-10 ">
        <div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث ....."
            type="text"
            className={`main-input  border    border-formBlue w-full max-w-[200px]`}
          />
        </div>
        <div className="cards-container gap-5 mt-5">
          {Object.keys(teachers).length > 0 &&
            teachers.courses
              .filter((course) => course.title.includes(search))
              .map((course) => {
                return (
                  <div
                    key={course.id}
                    className="flex justify-center items-center max-w-[316px] max-md:max-w-full shadow-xl rounded-3xl"
                  >
                    <div className="w-full rounded-3xl overflow-hidden bg-white">
                      <div className="w-full h-52 overflow-hidden">
                        <img
                          src={`https://elshamelapi.js-py.me/images/${course.image}`}
                          alt=""
                          className="object-cover h-full w-full"
                        />
                      </div>
                      <div className="p-5 space-y-3">
                        <h1 className="text-slate-700 text-xl font-bold">
                          {course.title}
                        </h1>
                        <div className="flex items-center gap-3 text-slate-600">
                          <FaUniversity />
                          <p>{course.category}</p>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                          <PiStudentLight />
                          <p>{course.instructor}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-slate-600 text-2xl font-semibold">
                            {course.price} ج م
                          </p>
                          <Link
                            to={`/course/${course.id}`}
                            className="gradient-text font-semibold text-lg flex justify-start items-center"
                          >
                            اقرا المزيد
                            <IoIosArrowBack className="text-blue-800 text-2xl" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
