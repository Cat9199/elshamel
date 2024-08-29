import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { axiosInstance } from "../lib/axiosInstance";
import { toast, Toaster } from "sonner";
// import { axiosInstance } from "../lib/axiosInstance";

export default function PasswordFrom() {
  const schema = z
    .object({
      oldPassword: z.string().min(6, "كلمة السر القديمة مطلوبة"),
      password: z.string().min(6, "كلمة السر يجب أن تكون 6 أحرف على الأقل"),
      confirmPassword: z.string().min(6, "تأكيد كلمة السر مطلوب"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "كلمتا السر غير متطابقتين",
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    const finalData = {
      old_password: data.oldPassword,
      new_password: data.password,
    };
    axiosInstance
      .put("auth/profile/password", finalData)
      .then((res) => {
        console.log(res.data);
        reset();
        toast.success("تم تغيير كلمة السر بنجاح");
        // Cookies.set("token", res.data.token);
        // setUser(res.data.user);
        // navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ direction: "rtl" }}
      className="w-[500px] max-md:w-full bg-white rounded-3xl m-auto  p-10 "
    >
      <Toaster position="bottom-right" richColors />
      {errorMessage && (
        <div className="h-6">
          <p className="text-red-400 text-xs  pt-2 text-center">
            {errorMessage}
          </p>
        </div>
      )}

      <div>
        <label htmlFor="oldPassword" className="mr-2  gradient-text">
          كلمة السر القديمة
        </label>
        <input
          {...register("oldPassword")}
          type="password"
          className={`main-input  border  ${
            errors.password ? " border-red-400" : " border-formBlue"
          } `}
        />
        <div className="h-6">
          {errors.oldPassword && (
            <p className="text-red-400 text-xs pr-5 pt-2">
              {errors.oldPassword.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="password" className="mr-2  gradient-text">
          كلمة السر الجديدة
        </label>
        <input
          {...register("password")}
          type="password"
          className={`main-input  border  ${
            errors.password ? " border-red-400" : " border-formBlue"
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
      <div>
        <label htmlFor="email" className="mr-2  gradient-text">
          تاكيد كلمة السر الجديدة
        </label>
        <input
          {...register("confirmPassword")}
          type="password"
          className={`main-input  border  ${
            errors.confirmPassword ? " border-red-400" : " border-formBlue"
          } `}
        />
        <div className="h-6">
          {errors.confirmPassword && (
            <p className="text-red-400 text-xs pr-5 pt-2">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      <button
        //   disabled={isPending}
        type="submit"
        className={` main-btn w-full mt-4 disabled:opacity-50 disabled:cursor-wait`}
      >
        تغيير كلمة السر
      </button>
    </form>
  );
}
