import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../store/store";
import createDOMPurify from "dompurify";
import Accordion from "../components/Accordion";
import { toast, Toaster } from "sonner";

export default function CoursePlay() {
  const { courseId } = useParams();
  const { userCourses } = useUserStore();
  const [courseInfo, setCourseInfo] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState({});
  const [vid, setVid] = useState();
  const [VidName, setVidName] = useState();

  console.log(vid);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const courseResponse = await axiosInstance.get(
          `https://elshamelapi.js-py.me/api/student/course/${courseId}`
        );
        setCourseInfo(courseResponse.data);
        setVid(courseResponse.data.sections[0].lessons[0].embed);
        setVidName(courseResponse.data.sections[0].lessons[0].title);
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

  useEffect(() => {
    // For executing scripts within the HTML content
    // const scriptElements = document.querySelectorAll("script");

    // scriptElements.forEach((script) => {
    //   const scriptCopy = document.createElement("script");
    //   scriptCopy.src = script.src;
    //   scriptCopy.innerHTML = script.innerHTML;
    //   scriptCopy.async = script.async;
    //   script.parentNode.replaceChild(scriptCopy, script);
    // });
    const script = document.createElement("script");
    script.src = "https://player.twitch.tv/js/embed/v1.js";
    script.async = true;

    // Load the script and initialize the Twitch player after the script has loaded
    script.onload = () => {
      if (window.Twitch) {
        new window.Twitch.Player("twitch-embed", {
          channel: "abdelrahman_nasr9", // Update with your dynamic channel if needed
          width: "100%",
          height: "100%",
          autoplay: true,
        });
      }
    };

    document.body.appendChild(script);
  }, [vid]);

  return (
    <div className="flex max-md:flex-col max-md:gap-10 max-md:h-auto max-md:p-5">
      <Toaster position="bottom-right " richColors />
      <div className="w-[300px] max-md:w-full max-md:shadow-xl p-10 gradient max-md:rounded-2xl space-y-6 max-md:order-1">
        <div className="space-y-10">
          <div className="space-y-3">
            <h1 className="text-white text-center text-2xl">
              {courseInfo.course?.title}
            </h1>
            <div className="w-full rounded-2xl overflow-hidden">
              <img
                src={`https://elshamelapi.js-py.me/images/${courseInfo.course?.image}`}
                alt=""
              />
            </div>
            <div className="space-y-3">
              <div className="w-full h-[200px] overflow-y-auto">
                <p>{courseInfo.course?.description}</p>
              </div>
            </div>
            {courseInfo.sections &&
              courseInfo.sections.map((section) => {
                return (
                  <Accordion
                    title={section.title}
                    lessons={section.lessons}
                    key={section.id}
                    setVid={setVid}
                    setVidName={setVidName}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="w-[calc(100vw-300px)] max-md:w-full p-5 space-y-10">
        <h1 className="gradient-text text-3xl text-center">{VidName}</h1>
        <div className="vid-stream">
          <div dangerouslySetInnerHTML={{ __html: vid }} />
        </div>
      </div>
    </div>
  );
}
