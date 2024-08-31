import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axiosInstance";
import { Link } from "react-router-dom";

export default function TeachersSec() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const getTeachers = async () => {
      try {
        const res = await axiosInstance.get(
          "https://elshamelapi.js-py.me/teachers"
        );
        setTeachers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTeachers();
  }, []);
  return (
    <div>
      <div className="max-w-[1300px] m-auto py-20 px-5">
        <h1 className="text-center gradient-text text-3xl font-bold mb-10">
          المحاضرين
        </h1>
        <div className="flex justify-center items-center gap-14 max-md:gap-6 flex-wrap">
          {teachers.map((teacher) => {
            return (
              <Link
                to={`/teacher/${teacher.id}`}
                state={{ teacher }}
                key={teacher.id}
                className="bg-white rounded-3xl py-8 px-10 flex flex-col items-center justify-center gap-4 h-52  w-52 max-md:w-full"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img src={teacher.profile_pic} alt="" className="w-20" />
                </div>

                <h1
                  className={`text-slate-700 ${
                    teacher.name.length > 20 ? "text-base" : "text-lg"
                  }  font-bold text-nowrap`}
                >
                  {teacher.name}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
