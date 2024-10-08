import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../store/store";

import Accordion from "../components/Accordion";
import { toast, Toaster } from "sonner";
import { FaLock } from "react-icons/fa";
export default function Course() {
  const { courseId } = useParams();
  const { userCourses, user } = useUserStore();
  const [courseInfo, setCourseInfo] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState({});
  // console.log(courseInfo.course.price);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const courseResponse = await axiosInstance.get(
          `https://elshamelapi.js-py.me/api/student/course/${courseId}`
        );
        setCourseInfo(courseResponse.data);
        const instructorId = courseResponse.data.course?.instructor;
        if (instructorId) {
          const userResponse = await axiosInstance.get(
            `https://elshamelapi.js-py.me/teacher/${instructorId}`
          );
          setTeacherInfo(userResponse.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCourse();
  }, [courseId]);
  function countTotalLessons(sections) {
    let totalLessons = 0;

    sections.forEach((section) => {
      if (section.lessons && Array.isArray(section.lessons)) {
        totalLessons += section.lessons.length;
      }
    });

    return totalLessons;
  }

  const navigate = useNavigate();
  const userCoursesIds = userCourses.map((course) => course.id);

  const codeHandler = async (e) => {
    e.preventDefault();
    if (Object.keys(user).length === 0) {
      navigate("/signin");
    }
    try {
      await axiosInstance
        .post(`https://elshamelapi.js-py.me/api/student/course/enroll`, {
          course_id: courseId,
          Pay_code: courseInfo?.course?.is_free ? "" : e.target[0].value,
        })
        .then((res) => {
          if (res.data.message === "تم التسجيل في الدورة بنجاح") {
            navigate(`/course/play/${courseId}`);
          }
        });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="flex  max-md:flex-col max-md:gap-10 max-md:h-auto max-md:p-5">
      <Toaster position="bottom-right " richColors />
      <div className="w-[300px] max-md:w-full max-h-screen     shadow-2xl p-10 rounded-3xl space-y-6 max-md:order-1">
        <div className="space-y-10">
          <Link to={`/teacher/${teacherInfo.teacher?.id}`}>
            <div className="w-20 h-20 rounded-full overflow-hidden m-auto">
              <img src={teacherInfo.teacher?.profile_pic} alt="" />
            </div>
            <h1 className="gradient-text text-center text-2xl  ">
              {teacherInfo.teacher?.name}
            </h1>
          </Link>

          {userCoursesIds.includes(parseInt(courseId)) ? (
            <Link
              to={`/course/play/${courseId}`}
              className="main-btn w-full m-auto block text-center"
            >
              اكمل التعلم
            </Link>
          ) : courseInfo?.course?.price === 0 ? (
            <button onClick={codeHandler} className="main-btn w-full">
              اضف الكورس
            </button>
          ) : (
            <form className=" text-white space-y-3 " onSubmit={codeHandler}>
              <h1 className="text-xl gradient-text">خيارات الدفع</h1>
              <input
                type="text"
                placeholder="ادخل الكود"
                required
                className="main-input border border-blue-800  text-blue-600"
              />
              <button className="main-btn w-full">تاكيد الدفع</button>
            </form>
          )}
        </div>
      </div>
      <div className="w-[calc(100vw-300px)] max-md:w-full  p-10 space-y-10 ">
        <h1 className="text-center gradient-text text-3xl font-bold mb-8">
          {courseInfo.course?.title}
        </h1>
        <div className="w-full h-[300px]">
          <img
            src={`https://elshamelapi.js-py.me/images/${courseInfo.course?.image}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-3">
          <p className="gradient-text text-sm">تفاصيل الكورس :</p>
          <div className="w-full h-[100px] overflow-y-auto">
            <p>{courseInfo.course?.description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap  gap-5">
          <div className="flex items-center justify-center gap-3 min-w-[300px] max-md:w-full bg-white py-3 px-6 rounded-3xl shadow-xl">
            <p className="black text-lg">السعر :</p>
            <p className="gradient-text text-lg">
              {courseInfo.course?.price === 2 ? (
                <FaLock />
              ) : (
                courseInfo.course?.price
              )}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 min-w-[300px] max-md:w-full bg-white py-3 px-6 rounded-3xl shadow-xl">
            <p className="black text-lg">الفئة :</p>
            <p className="gradient-text text-lg">
              {courseInfo.course?.category}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 min-w-[300px] max-md:w-full bg-white py-3 px-6 rounded-3xl shadow-xl">
            <p className="black text-lg">عدد الدروس :</p>
            <p className="gradient-text text-lg">
              {courseInfo.length !== 0 &&
                countTotalLessons(courseInfo.sections)}
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="gradient-text text-sm">تفاصيل الكورس :</p>
          {courseInfo.sections &&
            courseInfo.sections.map((section) => {
              return (
                <Accordion
                  title={section.title}
                  lessons={section.lessons}
                  key={section.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
