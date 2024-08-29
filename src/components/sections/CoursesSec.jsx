import { Link } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";
import { PiStudentLight } from "react-icons/pi";
import card from "../../assets/card.png";
import card2 from "../../assets/pattern.png";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect } from "react";
import { axiosInstance } from "../../lib/axiosInstance";
import { useUserStore } from "../../store/store";
export default function CoursesSec() {
  const { setUserCourses, userCourses } = useUserStore();
  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axiosInstance.get("student/courses");
        setUserCourses(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCourses();
  }, [setUserCourses]);

  return (
    <div className="max-w-[1300px] m-auto max-md:px-5">
      <div className="flex justify-start items-center gap-4 overflow-x-auto w-full text-nowrap no-scroll">
        <button className="main-btn">الكل</button>
        <button className="main-btn">مواد جامعية</button>
        <button className="main-btn">مواد دراسية</button>
        <button className="main-btn">مواد جامعية</button>
        <button className="main-btn">مواد دراسية</button>
        <button className="main-btn">مواد جامعية</button>
        <button className="main-btn">مواد دراسية</button>
      </div>
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
          {userCourses.length > 0 &&
            userCourses.map((course) => {
              return (
                <SwiperSlide key={course.id}>
                  <div className="  flex justify-center items-center max-w-[316px] max-md:max-w-full">
                    <div className="w-full rounded-3xl overflow-hidden bg-white ">
                      <div className="w-full h-52 overflow-hidden">
                        <img
                          src={course.image}
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
                          <p>الجامعة</p>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                          <PiStudentLight />
                          <p>المحاضر</p>
                        </div>
                        <div className="flex justify-between items-center ">
                          <p className="text-slate-600 text-2xl font-semibold">
                            {course.price} ج م
                          </p>
                          <Link
                            to={`/course/${course.id}`}
                            className="gradient-text font-semibold text-lg flex justify-start items-center  "
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

          {/* <SwiperSlide>
            <div className="  flex justify-center items-center max-w-[316px] max-md:max-w-full">
              <div className="w-full rounded-3xl overflow-hidden bg-white ">
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={card2}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <h1 className="text-slate-700 text-xl font-bold">
                    مسار تطوير المواقع باستحدام بايثون
                  </h1>
                  <div className="flex items-center gap-3 text-slate-600">
                    <FaUniversity />
                    <p>الجامعة</p>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <PiStudentLight />
                    <p>المحاضر</p>
                  </div>
                  <div className="flex justify-between items-center ">
                    <Link
                      href={"#"}
                      className="gradient-text font-semibold text-lg flex justify-start items-center  "
                    >
                      <IoIosArrowBack className="text-blue-800 text-2xl" />
                      اقرا المزيد
                    </Link>
                    <p className="text-slate-600 text-2xl font-semibold">
                      1900 ج م
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
        {/* <CarouselItem className="max-md:basis-full basis-1/4 flex justify-center items-center text-end ">
                <div className="w-full rounded-3xl overflow-hidden bg-white ">
                  <Image src={card} alt="" className="w-full" />
                  <div className="p-5 space-y-3">
                    <h1 className="text-slate-700 text-xl font-bold">
                      مسار تطوير المواقع باستحدام بايثون
                    </h1>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>الجامعة</p>
                      <FaUniversity />
                    </div>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>المحاضر</p>
                      <PiStudentLight />
                    </div>
                    <div className="flex justify-between items-center ">
                      <Link
                        href={"#"}
                        className="gradient-text font-semibold text-lg flex justify-start items-center  "
                      >
                        <IoIosArrowBack className="text-blue-800 text-2xl" />
                        اقرا المزيد
                      </Link>
                      <p className="text-slate-600 text-2xl font-semibold">
                        1900 ج م
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem> */}
        {/* <Carousel
            opts={{
              align: "end",
            }}
            className="w-full "
          >
            <CarouselContent>

              <CarouselItem className="max-md:basis-full basis-1/4 flex justify-center items-center text-end ">
                <div className="w-full rounded-3xl overflow-hidden bg-white ">
                  <Image src={card} alt="" />
                  <div className="p-5 space-y-3">
                    <h1 className="text-slate-700 text-xl font-bold">
                      مسار تطوير المواقع باستحدام بايثون
                    </h1>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>الجامعة</p>
                      <FaUniversity />
                    </div>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>المحاضر</p>
                      <PiStudentLight />
                    </div>
                    <div className="flex justify-between items-center ">
                      <Link
                        href={"#"}
                        className="gradient-text font-semibold text-lg flex justify-start items-center  "
                      >
                        <IoIosArrowBack className="text-blue-800 text-2xl" />
                        اقرا المزيد
                      </Link>
                      <p className="text-slate-600 text-2xl font-semibold">
                        1900 ج م
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="max-md:basis-full basis-1/4 flex justify-center items-center text-end ">
                <div className="w-full rounded-3xl overflow-hidden bg-white ">
                  <Image src={card} alt="" />
                  <div className="p-5 space-y-3">
                    <h1 className="text-slate-700 text-xl font-bold">
                      مسار تطوير المواقع باستحدام بايثون
                    </h1>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>الجامعة</p>
                      <FaUniversity />
                    </div>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>المحاضر</p>
                      <PiStudentLight />
                    </div>
                    <div className="flex justify-between items-center ">
                      <Link
                        href={"#"}
                        className="gradient-text font-semibold text-lg flex justify-start items-center  "
                      >
                        <IoIosArrowBack className="text-blue-800 text-2xl" />
                        اقرا المزيد
                      </Link>
                      <p className="text-slate-600 text-2xl font-semibold">
                        1900 ج م
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="max-md:basis-full basis-1/4 flex justify-center items-center text-end ">
                <div className="w-full rounded-3xl overflow-hidden bg-white ">
                  <Image src={card} alt="" />
                  <div className="p-5 space-y-3">
                    <h1 className="text-slate-700 text-xl font-bold">
                      مسار تطوير المواقع باستحدام بايثون
                    </h1>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>الجامعة</p>
                      <FaUniversity />
                    </div>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>المحاضر</p>
                      <PiStudentLight />
                    </div>
                    <div className="flex justify-between items-center ">
                      <Link
                        href={"#"}
                        className="gradient-text font-semibold text-lg flex justify-start items-center  "
                      >
                        <IoIosArrowBack className="text-blue-800 text-2xl" />
                        اقرا المزيد
                      </Link>
                      <p className="text-slate-600 text-2xl font-semibold">
                        1900 ج م
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="max-md:basis-full basis-1/4 flex justify-center items-center text-end ">
                <div className="w-full rounded-3xl overflow-hidden bg-white ">
                  <Image src={card} alt="" />
                  <div className="p-5 space-y-3">
                    <h1 className="text-slate-700 text-xl font-bold">
                      مسار تطوير المواقع باستحدام بايثون
                    </h1>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>الجامعة</p>
                      <FaUniversity />
                    </div>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>المحاضر</p>
                      <PiStudentLight />
                    </div>
                    <div className="flex justify-between items-center ">
                      <Link
                        href={"#"}
                        className="gradient-text font-semibold text-lg flex justify-start items-center  "
                      >
                        <IoIosArrowBack className="text-blue-800 text-2xl" />
                        اقرا المزيد
                      </Link>
                      <p className="text-slate-600 text-2xl font-semibold">
                        1900 ج م
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="max-md:basis-full basis-1/4 flex justify-center items-center text-end ">
                <div className="w-full rounded-3xl overflow-hidden bg-white ">
                  <Image src={card} alt="" />
                  <div className="p-5 space-y-3">
                    <h1 className="text-slate-700 text-xl font-bold">
                      مسار تطوير المواقع باستحدام بايثون
                    </h1>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>الجامعة</p>
                      <FaUniversity />
                    </div>
                    <div className="flex justify-end items-center gap-3 text-slate-600">
                      <p>المحاضر</p>
                      <PiStudentLight />
                    </div>
                    <div className="flex justify-between items-center ">
                      <Link
                        href={"#"}
                        className="gradient-text font-semibold text-lg flex justify-start items-center  "
                      >
                        <IoIosArrowBack className="text-blue-800 text-2xl" />
                        اقرا المزيد
                      </Link>
                      <p className="text-slate-600 text-2xl font-semibold">
                        <span>ج م </span>
                        1900
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel> */}
      </div>
    </div>
  );
}
