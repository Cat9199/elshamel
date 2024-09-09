import { Link } from "react-router-dom";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import googleImg from "../assets/Google.webp";

export default function Footer() {
  return (
    <div className="pt-5">
      <div className="max-w-[1300px] m-auto max-md:px-5 relative flex max-md:flex-col px-5 max-md:gap-5">
        <div className="w-1/3  max-md:w-full">
          <Link
            to={"/"}
            className=" w-fit  flex items-center h-14 max-md:flex-grow max-md:-order-1 cursor-pointer"
          >
            <img src={logo2} alt="logo" className="w-12" />
            <img src={logo1} alt="logo" className="w-16" />
          </Link>
          <p className="text-slate-500">
            منصة تعليمية إلكترونية تهتم بتقديم دورات تدريبية متخصصة في مجال
            التطوير المهني للمعلمين والتربويين، يقدمها أكاديميون ومعلمون متميزون
            من مختلف أرجاء العالم، ومتحمسون لتوسيع دائرة المستفيدين من مخزونهم
            العلمي والمعرفي المتخصص في مجال التدريس.
          </p>
        </div>
        <div className="w-1/3 max-md:w-full px-5 ">
          <div className="m-auto w-fit max-md:m-0">
            <h1 className="gradient-text font-bold text-xl h-14">روابط مهمة</h1>
            <div className="flex flex-col   gap-2 flex-wrap pl-20">
              <Link className="w-fit text-gray-500" to={"/"}>
                الرئيسية
              </Link>
              <Link className="w-fit text-gray-500" to={"/courses"}>
                دوراتنا
              </Link>

              <Link className="w-fit text-gray-500" to={"/aboutus"}>
                من نحن
              </Link>
              <Link className="w-fit text-gray-500" to={"/contactus"}>
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/3 max-md:w-full px-5">
          <h1 className="gradient-text font-bold text-xl h-14">
            لنكن على تواصل
          </h1>

          <div className="flex  items-center gap-4  ">
            <a
              target="_blank"
              href="https://youtube.com/channel/UChuX94wMiF3ha_b6R1bsd4A?si=wDZtaOaeKODQ3ps7"
            >
              <FaYoutube className="text-gray-500 text-3xl" />
            </a>
            <a target="_blank" href="https://x.com/ELSHAMEL111">
              <BsTwitterX className="text-gray-500 text-2xl" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61564023914822"
            >
              <FaFacebook className="text-gray-500 text-3xl" />
            </a>
            <a target="_blank" href="https://www.instagram.com/manasa_elshamel">
              <FaInstagram className="text-gray-500 text-3xl" />
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@https://www.tiktok.com/@manasaelshamel?_t=8owjyc93jcf&_r=1"
            >
              <FaTiktok className="text-gray-500 text-3xl" />
            </a>
            <a target="_blank" href="mailto:manasa2024elshamel@gmail.com">
              <IoIosMail className="text-gray-500 text-3xl" />
            </a>
          </div>
          <a href="#" className="mt-5 block">
            <img src={googleImg} alt="" className="w-40" />
          </a>
        </div>
      </div>
      <p className="py-4 text-center text-gray-500 border-t mt-5 border-gray-500">
        2024 جميع الحقوق محفوظة لمنصة الشامل التعليمية
      </p>
    </div>
  );
}
