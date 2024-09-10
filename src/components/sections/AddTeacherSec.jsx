import { Link } from "react-router-dom";

export default function AddTeacherSec() {
  return (
    <div>
      <div className="max-w-[1300px] m-auto py-20  gradient  lg:py-16 px-8 lg:px-16 lg:rounded-[32px] relative overflow-hidden">
        <img
          width="1110"
          height="356"
          src="https://aanaab.com/wp-content/themes/AanaabB2B/assets/images/Line-pattern.png"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          alt="Line pattern"
        />

        <div className="flex items-center flex-col lg:flex-row gap-12 relative z-10">
          <div className="flex flex-col items-center lg:items-start gap-3 grow">
            <h2 className="text-white text-2xl lg:text-[32px] leading-normal font-extrabold text-center lg:text-right">
              دورات تدريبية للمعلمين على بعد نقرة واحدة{" "}
            </h2>
            <p className="text-white text-base lg:text-xl leading-[180%] lg:leading-[180%] font-bold text-center lg:text-right">
              مستعد لرحلة جديدة في مسارك المهني؟ ابدأ الآن وسجّل في الشامل{" "}
            </p>
          </div>

          <Link
            to={"/signup"}
            className="py-3 px-8 rounded-[32px] w-full text-center lg:w-auto bg-white text-[#8447FF] hover:text-[#7841E8] active:text-[#9D6CFF] transition-all duration-300 text-base leading-6 font-bold"
          >
            سجّل في الشامل
          </Link>
        </div>
      </div>
    </div>
  );
}
