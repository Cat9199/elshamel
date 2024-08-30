import { Link } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";
import { PiStudentLight } from "react-icons/pi";

import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axiosInstance";
import { useUserStore } from "../../store/store";
// eslint-disable-next-line react/prop-types
export default function CoursesSec({ user, page }) {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const {
    allCourses,
    setAllCourses,
    userCourses,
    setAllCategories,
    allCategories,
  } = useUserStore();
  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axiosInstance.get(
          `student/courses/${selectedCountry}`
        );
        setAllCourses(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (!user) {
      getCourses();
    }
    const getCategories = async () => {
      try {
        const res = await axiosInstance.get(
          `https://elshamelapi.js-py.me/categories`
        );
        setAllCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, [setAllCourses, selectedCountry, user, setAllCategories]);
  const categories = [...new Set(userCourses.map((item) => item.category))];
  console.log(page, user);
  return (
    <div className="max-w-[1300px] m-auto max-md:px-5">
      <h1 className="text-center gradient-text text-3xl font-bold mb-10">
        دوراتنا
      </h1>
      {page && (
        <select
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="max-w-40 border border-blue-500 main-input my-5 "
        >
          <option value="all">الكل</option>
          {allCategories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      )}
      {page !== true && (
        <div className="flex justify-start items-center gap-4 overflow-x-auto w-full text-nowrap no-scroll">
          <button
            onClick={() => setSelectedCountry("all")}
            className={`${
              selectedCountry === "all" ? "main-btn" : "main-btn-light"
            }`}
          >
            الكل
          </button>
          {(user ? categories : allCategories).map((category) => {
            return (
              <button
                onClick={() => setSelectedCountry(category)}
                key={category}
                className={`${
                  selectedCountry === category ? "main-btn" : "main-btn-light"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {page ? (
        <div className="flex flex-wrap gap-5  max-md:justify-center">
          {(user ? userCourses : allCourses).length > 0 &&
            (user
              ? selectedCountry === "all"
                ? userCourses
                : userCourses.filter(
                    (course) => course.category === selectedCountry
                  )
              : allCourses
            ).map((course) => {
              return (
                <div
                  key={course.id}
                  className=" max-md:w-full w-[300px]   max-md:max-w-full "
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
      ) : (
        <div className="w-full my-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            dir="rtl"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {(user ? userCourses : allCourses).length > 0 &&
              (user
                ? selectedCountry === "all"
                  ? userCourses
                  : userCourses.filter(
                      (course) => course.category === selectedCountry
                    )
                : allCourses
              ).map((course) => {
                return (
                  <SwiperSlide key={course.id}>
                    <div className="flex justify-center items-center max-w-[316px] max-md:max-w-full">
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
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      )}
    </div>
  );
}
