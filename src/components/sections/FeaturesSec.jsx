import opiration from "../../assets/availability.png";
import earth from "../../assets/earth.png";
import teacher from "../../assets/teacher.png";
import lib from "../../assets/lib.png";

export default function FeaturesSec() {
  return (
    <div>
      <div className="max-w-[1300px] m-auto py-20 px-5">
        <h1 className="text-center gradient-text text-3xl font-bold mb-10">
          مميزات الشامل
        </h1>
        <div className="flex justify-center items-center gap-14 max-md:gap-6 flex-wrap">
          <div className="bg-white rounded-3xl py-8 px-10 flex flex-col items-center justify-center gap-4  w-52 max-md:w-full">
            <img src={opiration} alt="" className="w-20" />

            <h1 className="text-slate-700 text-xl font-bold">وصول سهل</h1>
          </div>
          <div className="bg-white rounded-3xl py-8 px-10 flex flex-col items-center justify-center gap-4  w-52 max-md:w-full">
            <img src={earth} alt="" className="w-20" />

            <h1 className="text-slate-700 text-xl font-bold">افضل المعلمين</h1>
          </div>
          <div className="bg-white rounded-3xl py-8 px-10 flex flex-col items-center justify-center gap-4  w-52 max-md:w-full">
            <img src={teacher} alt="" className="w-20" />

            <h1 className="text-slate-700 text-xl font-bold">مشاريع مستمرة</h1>
          </div>
          <div className="bg-white rounded-3xl py-8 px-10 flex flex-col items-center justify-center gap-4  w-52 max-md:w-full">
            <img src={lib} alt="" className="w-20" />

            <h1 className="text-slate-700 text-xl font-bold">
              مكتبة اليكترونية
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
