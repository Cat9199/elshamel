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


        </div>
      </div>
    </div>
  );
}
