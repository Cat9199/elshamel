import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "../lib/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

import { useUserStore } from "../store/store";

export default function Signin() {
  const [errorMessage, setErrorMessage] = useState(null);
  const schema = z.object({
    email: z.string().email("البريد الإلكتروني غير صحيح"),
    password: z.string().min(6, "كلمة السر يجب أن تكون 6 أحرف على الأقل"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const navigate = useNavigate();
  const { setUser, setUserCourses } = useUserStore((state) => state);
  const token = Cookies.get("token");
  useEffect(() => {
    if (token && token !== "undefined") {
      navigate("/");
    }
  }, [navigate, token]);

  const onSubmit = (data) => {
    const finalData = {
      email: data.email,
      password: data.password,
    };
    axiosInstance
      .post("auth/login", finalData)
      .then((res) => {
        Cookies.set("token", res.data.token, {
          expires: 90,
          path: "/",
        });
        setUser(res.data.user);
      })
      .then(() => {
        axiosInstance.get("auth/profile").then((res) => {
          setUser(res.data.user);
          setUserCourses(res.data.courses);
          navigate("/");
        });
      })
      .catch(() => {
        setErrorMessage("البريد الإلكتروني او كلمة السر خاطئة");
      });
  };

  return (
    <div className="min-h-[calc(100vh-80px)]  py-10 grid place-items-center max-md:px-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ direction: "rtl" }}
        className="w-[500px] max-md:w-full bg-white shadow-2xl rounded-3xl m-auto  p-10 "
      >
        <h1 className="text-center gradient-text text-2xl mb-5">
          تسجيل الدخول
        </h1>
        {errorMessage && (
          <div className="h-6">
            <p className="text-red-400 text-xs  pt-2 text-center">
              {errorMessage}
            </p>
          </div>
        )}
        <div>
          <label htmlFor="email" className="mr-2  gradient-text">
            البريد الإلكتروني
          </label>
          <input
            {...register("email")}
            type="email"
            className={`main-input  border  ${
              errors.email ? " border-red-400" : " border-formBlue"
            } `}
          />
          <div className="h-6">
            {errors.email && (
              <p className="text-red-400 text-xs pr-5 pt-2">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="mr-2  gradient-text">
            كلمة السر
          </label>
          <input
            {...register("password")}
            type="password"
            className={`main-input border ${
              errors.password ? "border-red-400" : "border-formBlue"
            } `}
          />
          <div className="h-6">
            {errors.password && (
              <p className="text-red-400 text-xs pr-5 pt-2">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <Link className="gradient-text underline" to="/signup">
          تسجيل حساب جديد
        </Link>
        <button
          //   disabled={isPending}
          type="submit"
          className={` main-btn w-full mt-4 disabled:opacity-50 disabled:cursor-wait`}
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
}
