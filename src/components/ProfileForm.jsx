import { useEffect, useState } from "react";
import { useUserStore } from "../store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { axiosInstance } from "../lib/axiosInstance";
import Cookies from "js-cookie";
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
  const schema = z
    .object({
      fullName: z.string().min(1, "الاسم بالكامل مطلوب"),
      email: z.string().email("البريد الإلكتروني غير صحيح"),
      phone: z
        .string()
        .min(10, "رقم الجوال غير صحيح")
        .max(15, "رقم الجوال غير صحيح"),
      //   role: z.string().min(2, "يحب اختبار نوع العضوية"),
      section: z.string().optional(),
      //   parentNumber: z.string().min(1, "رقم الهاتف الأجتماعي مطلوب").optional(),
      country: z.string().min(1, "يجب اختيار البلد"),
      city: z.string().min(1, "يجب اختيار المدينة"),
      //   password: z.string().min(6, "كلمة السر يجب أن تكون 6 أحرف على الأقل"),
      //   confirmPassword: z.string().min(6, "تأكيد كلمة السر مطلوب"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "كلمتا السر غير متطابقتين",
    })
    .refine(
      (data) => {
        if (data.role === "student") {
          return data.section && data.section.trim() !== "";
        }
        return true;
      },
      {
        path: ["section"],
        message: "يحب اختبار القسم للطلاب",
      }
    )
    .refine(
      (data) => {
        if (
          data.section === undefined &&
          data.section === "جامعي" &&
          data.section === "فوق جامعي" &&
          data.section === ""
        ) {
          return data.section && data.section.trim() !== "";
        }
        return true;
      },
      {
        path: ["[parentNumber]"],
        message: "يحب اختبار رقم جوال ولي الامر للطلاب",
      }
    );
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
  const role = watch("role");
  const section = watch("section");
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
      {/* <div>
      <label htmlFor="role" className="mr-2  gradient-text">
        انضم كـ
      </label>
      <select
        {...register("role")}
        id="role"
        className={`main-input  border  ${
          errors.role ? " border-red-400" : " border-formBlue"
        } `}
      >
        <option value=""></option>
        <option value="student">طالب</option>
        <option value="teacher">معلم</option>
      </select>
      <div className="h-6">
        {errors.role && (
          <p className="text-red-400 text-xs pr-5 pt-2">
            {errors.role.message}
          </p>
        )}
      </div>
    </div> */}
      {/* {role === "student" && (
      <div>
        <label htmlFor="section" className="mr-2  gradient-text">
          القسم
        </label>
        <select
          {...register("section")}
          id="section"
          className={`main-input  border  ${
            errors.section ? " border-red-400" : " border-formBlue"
          } `}
        >
          <option value=""></option>
          <option value="ابتدائي">ابتدائي</option>
          <option value="اعدادي">اعدادي</option>
          <option value="ثانوي">ثانوي</option>
          <option value="جامعي">جامعي</option>
          <option value="فوق جامعي">فوق جامعي</option>
        </select>
        <div className="h-6">
          {errors.section && (
            <p className="text-red-400 text-xs pr-5 pt-2">
              {errors.section.message}
            </p>
          )}
        </div>
      </div>
    )} */}
      {/* {(() => {
      if (
        section !== undefined &&
        section !== "جامعي" &&
        section !== "فوق جامعي" &&
        section !== ""
      ) {
        return (
          <div>
            <label
              htmlFor="parentNumber"
              className="mr-2 gradient-text"
            >
              رقم جوال ولي الامر
            </label>
            <input
              {...register("parentNumber")}
              type="number"
              id="parentNumber"
              className={`main-input border ${
                errors.parentNumber
                  ? "border-red-400"
                  : "border-formBlue"
              }`}
            />
            <div className="h-6">
              {errors.parentNumber && (
                <p className="text-red-400 text-xs pr-5 pt-2">
                  {errors.parentNumber.message}
                </p>
              )}
            </div>
          </div>
        );
      }
      return null;
    })()} */}

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
      {/* <div>
      <label htmlFor="email" className="mr-2  gradient-text">
        كلمة السر
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
        تاكيد كلمة السر
      </label>
      <input
        {...register("confirmPassword")}
        type="password"
        className={`main-input  border  ${
          errors.confirmPassword
            ? " border-red-400"
            : " border-formBlue"
        } `}
      />
      <div className="h-6">
        {errors.confirmPassword && (
          <p className="text-red-400 text-xs pr-5 pt-2">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div> */}

      <button
        //   disabled={isPending}
        type="submit"
        className={` main-btn w-full mt-4 disabled:opacity-50 disabled:cursor-wait`}
      >
        تعديل
      </button>
    </form>
  );
}
