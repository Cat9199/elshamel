import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../store/store";

export default function PriveteRoute({ children }) {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const { userCourses } = useUserStore();
  const { courseId } = useParams();

  const userCoursesIds = userCourses.map((course) => course.id);
  useEffect(() => {
    if (!token || token === "undefined") {
      return navigate("/signin");
    }

    if (!userCoursesIds.includes(parseInt(courseId))) {
      return navigate(`/course/${courseId}`);
    }
    // if (userCoursesIds.includes(parseInt(courseId))) {
    //   return navigate(`/course/play/${courseId}`);
    // }
  }, [token, navigate, courseId, userCoursesIds]);

  return children;
}
