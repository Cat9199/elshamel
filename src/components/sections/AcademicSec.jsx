import academic from "../../assets/academy3.png";
import academic2 from "../../assets/academy2.png";
import academic3 from "../../assets/academy.png";
import { Link } from "react-router-dom";

export default function AcademicSec() {
  return (
    <div>
      <div className="max-w-[1300px] m-auto py-20 px-5">
        <h1 className="text-center gradient-text text-3xl font-bold mb-10">
          الاكاديميات{" "}
        </h1>
        <div className="flex justify-center items-center gap-14 max-md:gap-6 flex-wrap">
          <Link
            to={"/teacher/38"}
            className="bg-white rounded-3xl py-2 px-10 flex flex-col items-center justify-center gap-4  w-60 max-md:w-full"
          >
            <img src={academic} alt="" className="w-full h-full object-cover" />
          </Link>
          <Link
            to={"/teacher/60"}
            className="bg-white rounded-3xl py-2 px-10 flex flex-col items-center justify-center gap-4  w-60 max-md:w-full"
          >
            <img
              src={academic2}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
          <Link
            to={"/teacher/59"}
            className="bg-white rounded-3xl py-2 px-10 flex flex-col items-center justify-center gap-4  w-60 max-md:w-full"
          >
            <img
              src={academic3}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
          {/* <div className="bg-white rounded-3xl py-8 px-10 flex flex-col items-center justify-center gap-4  w-52 max-md:w-full">
            <img src={lib} alt="" className="w-20" />

            <h1 className="text-slate-700 text-xl font-bold">
              مكتبة اليكترونية
            </h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}
