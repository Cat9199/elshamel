// import hero1 from "../assets/summaries.svg";
// import hero2 from "../assets/live-lecture.svg";
// import hero3 from "../assets/quizes.svg";
// import hero4 from "../assets/recorded-lectures.svg";
// import hero5 from "../assets/interactive-questions.svg";
// import hero6 from "../assets/questions-bank.svg";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";

import FeaturesSec from "../components/sections/FeaturesSec";
import CoursesSec from "../components/sections/CoursesSec";
import TeachersSec from "../components/sections/TeachersSec";
import AcademicSec from "../components/sections/AcademicSec";
import QandA from "../components/sections/QandA";

const Home = () => {
  return (
    <>
      <div className="hero relative min-h-[calc(100vh-80px)] bg-gradient-to-b from-blue-50 to-white flex justify-center items-center">
        <div className="text-center  max-w-[700px] max-md:max-w-[350px] relative z-20">
          <h1 className="text-6xl font-extrabold gradient-text  b-6 max-md:text-5xl ">
            تعلم بذكاء
          </h1>
          <p className="text-gray-700 text-xl leading-10 my-8 max-md:text-lg">
            في بيئة تفاعلية مع أفضل المعلمين والمدربين، معاك في كل مرحلة من
            الثانوية إلى التحصيلي والقدرات ثم الجامعة والتدريب والمعسكرات
            الاحترافية في شغوف
          </p>
          <button className="main-btn">تعلم معنا</button>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2   w-full h-full pointer-events-none  max-w-[1000px] ">
          {/* left top */}
          <div className="absolute max-md:top-0 max-md:scale-75 max-md:animate-none  top-10 left-10 transform animate-topToBottom">
            <img src={hero1} alt="hero1" />
          </div>
          {/* left bottom */}
          <div className="absolute max-md:bottom-0 max-md:scale-75 max-md:animate-none  bottom-10 left-10 transform animate-topToBottom">
            <img src={hero2} alt="hero1" />
          </div>

          {/* left middel */}
          <div className="absolute max-md:scale-75 max-md:animate-none  top-[calc(50vh-80px)]  -left-40 transform animate-bottomToTop max-md:hidden">
            <img src={hero3} alt="hero1" />
          </div>

          {/* right top */}
          <div className="absolute max-md:top-0 max-md:scale-75 max-md:animate-none  top-10 right-10 transform animate-topToBottom">
            <img src={hero4} alt="hero1" />
          </div>

          {/* right middel */}
          <div className="absolute max-md:scale-75 max-md:animate-none  top-[calc(50vh-80px)] -right-40 transform animate-bottomToTop max-md:hidden">
            <img src={hero3} alt="hero1" />
          </div>

          {/* right bottom */}
          <div className="absolute max-md:bottom-0 max-md:scale-75 max-md:animate-none  bottom-10 right-10 transform animate-topToBottom">
            <img src={hero5} alt="hero1" />
          </div>
        </div>
      </div>
      <FeaturesSec />
      <CoursesSec />
      <QandA />
      <AcademicSec />
      <TeachersSec />
    </>
  );
};

export default Home;
