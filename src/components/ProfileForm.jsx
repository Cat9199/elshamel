import { useEffect, useState } from "react";
import { useUserStore } from "../store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { axiosInstance } from "../lib/axiosInstance";

import { toast, Toaster } from "sonner";

export default function ProfileForm() {
  const egyptCities = [
    "",
    "القاهرة",
    "الإسكندرية",
    "الجيزة",
    "شبرا الخيمة",
    "بورسعيد",
    "السويس",
    "الأقصر",
    "المنصورة",
    "المحلة الكبرى",
    "طنطا",
    "أسيوط",
    "الإسماعيلية",
    "الفيوم",
    "الزقازيق",
    "دمياط",
    "أسوان",
    "المنيا",
    "بني سويف",
    "قنا",
    "سوهاج",
    "الغردقة",
    "مدينة 6 أكتوبر",
    "شرم الشيخ",
    "بنها",
  ];
  const saudiCities = [
    "",
    "الرياض",
    "جدة",
    "مكة المكرمة",
    "المدينة المنورة",
    "الدمام",
    "الطائف",
    "تبوك",
    "الخبر",
    "بريدة",
    "خميس مشيط",
    "الهفوف",
    "حفر الباطن",
    "الجبيل",
    "نجران",
    "أبها",
    "ينبع",
    "عرعر",
    "جازان",
    "الباحة",
    "سكاكا",
  ];
  const schema = z.object({
    fullName: z.string().min(1, "الاسم بالكامل مطلوب"),
    email: z.string().email("البريد الإلكتروني غير صحيح"),
    phone: z
      .string()
      .min(10, "رقم الجوال غير صحيح")
      .max(15, "رقم الجوال غير صحيح"),

    country: z.string().min(1, "يجب اختيار البلد"),
    city: z.string().min(1, "يجب اختيار المدينة"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const [selectedCountry, setSelectedCountry] = useState([]);

  const country = watch("country");
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    if (country === "Saudi Arabia") {
      setSelectedCountry(saudiCities);
    } else if (country === "Egypt") {
      setSelectedCountry(egyptCities);
    }
  }, [country]);

  const { user, setUser } = useUserStore((state) => state);

  useEffect(() => {
    setValue("fullName", user.name);
    setValue("email", user.email);
    setValue("phone", user.phone);
    setValue("role", user.role);
    setValue("section", user.section);
    setValue("parentNumber", user.parentNumber);
    setValue("country", user.country);
    setValue("city", user.city);
  }, [setValue, user]);
  const onSubmit = (data) => {
    console.log("yes");

    const finalData = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      //   role: "Admin",
      country: data.country,
      city: data.city,
    };

    axiosInstance
      .put("auth/profile", finalData)
      .then(() => {
        axiosInstance.get("auth/profile").then((res) => {
          setUser(res.data.user);
          toast.success("تم تحديث بياناتك بنجاح");
        });
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
      <Toaster position="bottom-right" richColors className="text-red" />
      {errorMessage && (
        <div className="h-6">
          <p className="text-red-400 text-xs  pt-2 text-center">
            {errorMessage}
          </p>
        </div>
      )}
      <div>
        <label htmlFor="email" className="mr-2  gradient-text">
          الاسم بالكامل
        </label>
        <input
          {...register("fullName")}
          type="text"
          className={`main-input  border  ${
            errors.fullName ? " border-red-400" : " border-formBlue"
          } `}
        />
        <div className="h-6">
          {errors.fullName && (
            <p className="text-red-400 text-xs pr-5 pt-2">
              {errors.fullName.message}
            </p>
          )}
        </div>
      </div>
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
          رقم الجوال
        </label>
        <input
          {...register("phone")}
          type="number"
          className={`main-input  border  ${
            errors.phone ? " border-red-400" : " border-formBlue"
          } `}
        />
        <div className="h-6">
          {errors.phone && (
            <p className="text-red-400 text-xs pr-5 pt-2">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="country" className="mr-2  gradient-text">
          البلد
        </label>
        <select
          value={country}
          {...register("country")}
          id="country"
          className={`main-input  border  ${
            errors.country ? " border-red-400" : " border-formBlue"
          } `}
        >
          <option value=""></option>
          <option value="Saudi Arabia">السعودية</option>
          <option value="Egypt">مصر</option>
        </select>
        <div className="h-6">
          {errors.country && (
            <p className="text-red-400 text-xs pr-5 pt-2">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="city" className="mr-2  gradient-text">
          المدينة
        </label>
        <select
          {...register("city")}
          id="city"
          className={`main-input  border  ${
            errors.city ? " border-red-400" : " border-formBlue"
          } `}
        >
          {selectedCountry.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
        <div className="h-6">
          {errors.city && (
            <p className="text-red-400 text-xs pr-5 pt-2">
              {errors.city.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className={` main-btn w-full mt-4 disabled:opacity-50 disabled:cursor-wait`}
      >
        تعديل
      </button>
    </form>
  );
}
