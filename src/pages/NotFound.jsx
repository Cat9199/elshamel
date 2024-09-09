import { Link } from "react-router-dom";
import notFoundImg from "../assets/404.svg";

export default function NotFound() {
  return (
    <div className="grid place-items-center h-screen p-10">
      <div className="w-1/3 max-md:w-full text-center">
        <img src={notFoundImg} alt="" />
        <p className="mb-5">الصفحة غير موجودة</p>
        <Link className="main-btn block" to={"/"}>
          الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
