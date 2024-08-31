import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axiosInstance";
import { useEffect, useState } from "react";
// import logo from "../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { PiStudentLight } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
export default function Teacher() {
  const { teacherId } = useParams();
  const [teachers, setTeachers] = useState({});

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
  return (
    <div className="flex h-[calc(100vh-80px)] max-md:flex-col max-md:gap-10 max-md:h-auto max-md:p-5">
      <div className="w-[300px] max-md:w-full  max-md:shadow-xl p-10 gradient  max-md:rounded-2xl space-y-6">
        <div className="space-y-3">
          <div className="w-20 h-20 rounded-full overflow-hidden m-auto">
            <img src={teachers.teacher?.profile_pic} alt="" />
          </div>
          <h1 className="text-white text-center text-2xl  ">عبد الرحمن</h1>
        </div>
        <div>
          <p className="text-white text-sm"> البريد الالكتروني : </p>
          <p className="text-white text-xl">
            {teachers && teachers.teacher?.email}
          </p>
        </div>
        <div>
          <p className="text-white text-sm"> رقم الجوال: </p>
          <p className="text-white text-xl">
            {teachers && teachers.teacher?.phone}
          </p>
        </div>
      </div>
      <div className="flex-grow  p-10 h-full max-md:h-auto overflow-y-scroll">
        <h1 className="text-center gradient-text text-3xl font-bold mb-8">
          الكورسات
        </h1>
        <div className="cards-container gap-5">
          {Object.keys(teachers).length > 0 &&
            teachers.courses.map((course) => {
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
